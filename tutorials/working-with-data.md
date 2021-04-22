---
parent: Tutorials
title: Working with Network Canvas data in R
wip: true
summary: "This tutorial will show you how to work with Network Canvas data in the R statistics environment."
prerequisites: "In order to follow along with this tutorial you should:\n
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

```

Create an egoR object from our dataframe
```R

tf <- threefiles_to_egor(
    egos = egoDataFrame,
    alters = alterDataFrame,
    edges = edgeDataFrame,
    ID.vars = list(ego="networkCanvasEgoUUID", alter="networkCanvasUUID", source="networkCanvasSourceUUID", target="networkCanvasTargetUUID")
)

```

## Converting categorical variables to factors

Convert categorical variable format into factors
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
