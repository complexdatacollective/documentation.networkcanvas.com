---

title: Working with Network Canvas data in R
wip: true
summary: "
  This tutorial will show you how to work with Network Canvas data in the R statistics environment."
prerequisites: "
  In order to follow along with this tutorial you should:\n
  - Have an understanding of the R environment.\n
  - Have a working installation of R studio, or similar, in order to enter commands.\n
  "
completion_time: 1 hour
---
## Initial setup

Set the path to your data files below.

```R
dataDirectoryPath <- '~/Desktop/networkCanvasExportMerged' # merged dataset used for now
stopifnot(dir.exists(dataDirectoryPath))

file_name <- 'Joshua_caa8fa0b-a66b-4f34-ada0-502ec1f76667_attributeList_Person.csv'

# Get a list of all files
dataFileList <- list.files(dataDirectoryPath, pattern=NULL, all.files=FALSE, full.names=TRUE)

# todo iterate dataFileList, filter into cases, and create a list of ego, alter, and edge dataframes per case

egoDataFrame <- read.csv(dataFileList[7])
alterDataFrame <- read.csv(dataFileList[3])
edgeDataFrame <- read.csv(dataFileList[6])
```

Import the ego-r package, and any other packages we might use

```R
library(egor)
library(sna)
library(ggplot2)
```

Create an egoR object from our dataframe. The alter data file contains a unique alter identifier (i.e., "networkCanvasUUID") as well as a unique ego identifier (i.e., "networkCanvasEgoUUID") which will both be used to define the egor object.

```R
tf <- threefiles_to_egor(
    egos = egoDataFrame,
    alters = alterDataFrame,
    edges = edgeDataFrame,
    ID.vars = list(ego="networkCanvasEgoUUID", alter="networkCanvasUUID", source="networkCanvasSourceUUID", target="networkCanvasTargetUUID")
)
```

## Converting categorical variables to factors

Convert categorical variable format into factors. 

```R
catToFactor <- function(dataframe,variableName) {
    fullVariableName <- paste0(variableName,"_")
    catVariables <- grep(fullVariableName, names(dataframe), value=TRUE)
    # Check if variable exists
    if (identical(catVariables, character(0))){
      stop(paste0("Cannot find variable named -",variableName,"- in the data"))
    # Check if "true" in multiple columns of a single row
    } else if (sum(apply(dataframe[,catVariables], 1, function(x) sum(x %in% "true")>1))>0) {
      stop(paste0("Your variable -",variableName,"  - appears to take multiple values.")) }
    catValues <- sub(paste0('.*',fullVariableName), '', catVariables)
    factorVariable <- c()
    for(i in 1:length(catVariables)){
      factorVariable[dataframe[catVariables[i]]=="true"] <- catValues[i]
    }
    return(factor(factorVariable,levels=catValues))
}

# List of categorical variables in our protocol to convert into factors
categoricalVariablesList <- list('group', 'social_networks_research_relationship')

# Iterate the list and call our catToFactor function, assigning the result to a new column in our dataframe
for (variable in categoricalVariablesList) {
  dataFrame[variable] <- catToFactor(dataFrame, variable)
}
```

## Data visualization

Create a simple visualization of one ego network. To do this, we'll first convert it to a 'network' object and use the gplot function from the sna package. This visualization shows the new node labels and colors each node by the communication frequency with the participant.

```R
oneEgoNet <- as_network(egorNetworkCanvas)[[1]]
oneEgoNet%v%"vertex.names" <- oneEgoNet%v%"name"

colorScheme <- c( "#CC6677", "#117733", "#AA4499",
                  "#6699CC")

# A little recoding to get a color for each frequency
nodeColors <- ifelse(oneEgoNet%v%"communication_freq"=="-1",colorScheme[1],
                    ifelse(oneEgoNet%v%"communication_freq"=="1",colorScheme[2],
                           ifelse(oneEgoNet%v%"communication_freq"=="2",colorScheme[3],
                                  colorScheme[4])))

gplot(oneEgoNet,
       usearrows = FALSE,
       label = oneEgoNet%v%"name",
       displaylabels = TRUE,
       vertex.col=nodeColors,
       edge.col="gray")
```

This only shows a single egocentric network. However, the egor package has several functions that facilitate comparision of networks across ego nets. 

For example, here is a visualization showing each ego net with nodes' location being dependent on their communication with the participant and their status as a family member (i.e., true/false).

```R
plot(egorNetworkCanvas, venn_var = "family_member2",
     pie_var = "communication_freq2",vertex_label_var="nodeID",
     type = "egogram")
```

## Data Analysis

The egor package has numerous functions that help with basic data analysis of ego networks. For example, the *summary* function provides an overview of all ego networks in the egor object while *ego_density* function provides density for each network.

```R
summary(egorNetworkCanvas)

ego_density(egorNetworkCanvas)
```

We can also the sna package to look at these networks by applying functions (i.e., lapply) to each of these networks and aggregating the results. 

For example, here we first make a simple histogram of alter degrees across all ego networks.

```R
networkNetworkCanvas <- as_network(egorNetworkCanvas)

histData <- networkNetworkCanvas %>%
  lapply(degree,cmode="indegree") %>%
  unlist(recursive = FALSE) %>%
  as.data.frame()

histData$degree <- as.numeric(histData$".")

ggplot(histData, aes(x=degree)) +
    geom_histogram(color="black", fill="white",bins=5) +
    theme_classic()
```

Finally, we often want to examine how an ego attribute may be associated with ego network characteristics.

For example, here we look at the association between the level of reported enjoyment of conferences and the density of their ego network.

```R
ego_density(egorNetworkCanvas) %>%
  full_join(egorNetworkCanvas$ego,by=".egoID") %>%
  ggplot(aes(x = enjoy_conferences, y = density)) +
    geom_point(size=5) +
    geom_text(label=egorNetworkCanvas$ego$networkCanvasCaseID, aes(vjust=c(-1.5))) +
    ylim(0,0.6) + theme_classic()
```





