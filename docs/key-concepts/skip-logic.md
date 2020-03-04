---
layout: default
title: Skip Logic
parent: Key Concepts
nav_exclude: true
---
## Skip logic 

Skip logic refers to the rules you define at the stage-level which direct the path a participant takes through your study. You utilize skip logic within your protocol to determine whether or not a given stage is shown to a participant based upon their responses to previous survey questions. 

For example, if a participant indicates they have never used drugs before, you may want to configure your survey to skip subsequent screens asking about the places where and the people with whom the participant has used drugs. 
To configure skip logic for a stage, open it from the timeline view, and expand the section called "Skipping and Filtering". 

[screenshot of expanded section]

Skip logic is configured based upon the rules you define for alters, ego, or edges. All rules are reduced to a simple true/false for either skipping or showing the stage in question. If you use the “Skip this stage if” option and no node in the network meets the rules you defined, then the interview stage will be skipped altogether. Conversely, if you use the “Show this stage if” option and at least one node in the network meets the rules you defined for the particular stage, then the stage will be shown. 

[screenshot of rule definition]

Let’s say, for example, you are using a Categorical Bin interface to capture relationship types of alters. You define the options as ‘friend’, ‘spouse/partner’, ‘coworker’, ‘parent’, ‘sibling’, ‘child’, ‘uncle/aunt’, or ‘grandparent’ with corresponding values of 1, 2, 3, 4, 5, 6, 7, and 8. In the subsequent stage you use another Categorical Bin, but this one to capture type of relatedness of alters to ego (e.g. ‘biological’, ‘step’, ‘adoptive’, ‘through marriage’, etc.). Now let’s imagine that a participant does not nominate any alters to whom they are related (i.e. they have only nominated friends, spouse/partners, and/or coworkers). In such an instance, the type of relatedness stage would be irrelevant and, therefore, implementing skip logic to skip this stage entirely for such a participant would both increase efficiency and minimize respondent burden. 

[screenshot of skip logic implemented]

In the above example, you could also configure your skip logic to achieve the same outcome by implementing the converse rule (i.e. skip screen if alter of a type Person with Relationship excludes 4, 5, 6, 7, or 8). 

In either case, once you create more than one rule in your skip logic for a given stage, you need to determine whether you want all the rules matched or just any of the rules matched. In keeping with the examples above, let’s imagine that you want to create a subsequent screen to capture data about a participant’s biological nuclear family. You want this screen to be shown if a participant previously nominated alters with Relationship type ‘parent’, ‘sibling’ or ‘child’ and where these alters include type Relatedness of ‘biological’. Here you would use the all match criteria since you would not want the stage to be shown if the participant has alters in their network of Relationship type ‘parent’, ‘sibling’ or ‘child’ but none of them include type Relatedness ‘biological’. 

[screenshot of skip logic rules implement for above example showing match all criteria]

You may include as many rules for a given stage that you wish, applying them to alters, edges, and egos as is appropriate. Finally, all skip logic can be modified and deleted at the location you defined it simply by clicking on the rule itself or selecting the ‘x’ in the corner of the rule, respectively. 
