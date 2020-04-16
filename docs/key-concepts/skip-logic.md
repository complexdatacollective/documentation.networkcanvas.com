---
layout: default
title: Skip Logic
parent: Key Concepts
---
## Overview

Skip logic is a feature within Network Canvas that allows you to skip stages within the interview, based on the current information in the interview network. By skipping or showing certain stages, you are able to direct the path a participant takes through your protocol.

As an illustration: if a participant indicates on an ego form stage that they have never used drugs, you may configure your protocol using skip logic to not show them subsequent name interpreter screens that ask about drug use with alters.

## Skip Logic Rules

The following is a high level overview of the way that this feature operates:

- Skip logic is configured by creating one or more **rules**, based on the attributes of ego, alters, or edges. 
- These rules resolve to either **true** or **false** when the interview is in progress. 
- The value of the individual rules is then **aggregated** (based on if Network Canvas is told to consider them individually or collectively) into a global true or false outcome for the entire skip logic function.
- Based on this global outcome, the stage will either be shown or skipped.

There are various types of rule, depending on the network entity that is being targeted:

- **"Type" Rules**: These rules allow you to query if a given entity of a specified type exists in the network, using either the `exists` or `not exists` operator. This rule type is available for alter and edge rules.
- **"Variable" Rules**: These rules allow you to query the value of a variable on a given entity type. For example, you may query the value of a variable called `age` on an alter type called 'Person'. You can evaluate the result using one of several logical operators, that vary depending on the variable type. For example, number variables will let you query using operators such as 'greater than' and 'less than'. This rule type applies to alter and ego rules only.

## The Join Operator

Rules are chained together, or 'joined', using either `AND` or `OR` logic. The choice of join operator can have an extremely significant impact on the way that your rules are collectively evaluated.

## Worked Example

[screenshot of rule definition]

Let’s say, for example, you are using a Categorical Bin interface to capture relationship types of alters. You define the options as ‘friend’, ‘spouse/partner’, ‘coworker’, ‘parent’, ‘sibling’, ‘child’, ‘uncle/aunt’, or ‘grandparent’ with corresponding values of 1, 2, 3, 4, 5, 6, 7, and 8. In the subsequent stage you use another Categorical Bin, but this one to capture type of relatedness of alters to ego (e.g. ‘biological’, ‘step’, ‘adoptive’, ‘through marriage’, etc.). Now let’s imagine that a participant does not nominate any alters to whom they are related (i.e. they have only nominated friends, spouse/partners, and/or coworkers). In such an instance, the type of relatedness stage would be irrelevant and, therefore, implementing skip logic to skip this stage entirely for such a participant would both increase efficiency and minimize respondent burden. 

[screenshot of skip logic implemented]

In the above example, you could also configure your skip logic to achieve the same outcome by implementing the converse rule (i.e. skip screen if alter of a type Person with Relationship excludes 4, 5, 6, 7, or 8). 

In either case, once you create more than one rule in your skip logic for a given stage, you need to determine whether you want all the rules matched or just any of the rules matched. In keeping with the examples above, let’s imagine that you want to create a subsequent screen to capture data about a participant’s biological nuclear family. You want this screen to be shown if a participant previously nominated alters with Relationship type ‘parent’, ‘sibling’ or ‘child’ and where these alters include type Relatedness of ‘biological’. Here you would use the all match criteria since you would not want the stage to be shown if the participant has alters in their network of Relationship type ‘parent’, ‘sibling’ or ‘child’ but none of them include type Relatedness ‘biological’. 

[screenshot of skip logic rules implement for above example showing match all criteria]

## Adding Skip Logic to a Stage

You may include as many rules for a given stage that you wish, applying them to alters, edges, and egos as is appropriate. Finally, all skip logic can be modified and deleted at the location you defined it simply by clicking on the rule itself or selecting the ‘x’ in the corner of the rule, respectively.
