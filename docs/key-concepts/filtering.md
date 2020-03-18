---
layout: default
title: Filtering
parent: Key Concepts
---
## Network filtering

Network filtering refers to filtering within stages based on the presence or absence of certain alter or edge attributes, edges, or node types. You use network filtering to determine which alters will appear in a given stage of your survey. For example, network filtering can be used to select a subset of a participant’s network based on alter or edge attributes, and only show those alters/edges in a given stage. 

To configure network filtering within a stage, open the stage from the timeline view, and expand the section called "Skipping and Filtering". 

[screenshot of expanded section]

Following from the previous example, you might want to configure network filtering within the nuclear family stage of your survey to determine which nodes appear on that screen (in addition to skip logic you already implemented to determine whether or not the stage is shown). If the stage is shown, then you want to ensure only the nodes for whom the prompt would be relevant appear. In this case, you would define network filtering rules to include alters of Relationship type ‘parent’, ‘sibling’, or ‘child’ with Relatedness type ‘biological’. In this way, even if both biologically related and non-biologically related alters were named, the stage will only show relevant alters (e.g. nodes that are biologically related to ego).  

Similar to the skip logic configuration, you also need to determine whether you want the match criteria for your network filtering within the stage to include any rule you created or all the rules you created. In this example, you would select any since you would want any combination of the rules you defined to determine which nodes appear on the stage. 

[screenshot of network filtering rules configured for example]
