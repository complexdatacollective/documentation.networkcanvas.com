---
title: Additional Variables
wip: false
definition: A means of automatically assigning a variable when a node is added
  to the interview.
---
"Additional variables" are optional variables that can be defined on a prompt within the [Name Generator](../_interface-documentation/name-generator-using-forms.md) stage editor. These variables will be automatically assigned to any entity that is created (or in the case of roster data, nominated) on the specified prompt. This feature enables you to keep track of where within an interview a node was added, or to provide additional metadata that can be used for skip logic or stage level filtering later in the interview. 

Additional variables are always boolean, and you can set the default value to either "true" or "false".

To create one or more additional variables, open a Name Generator stage in Architect, and click on a prompt to open the "Edit Prompt" window. At the bottom of the window you will find the option to create additional variables under the heading "Assign Additional Variables". The "value" property controls whether the variable is initialised to true or false.

![Managing additional variables on a Name Generator prompt in Architect](../../assets/img/key-concepts/additional-variables/additional-variables.png){:standalone}

In an interview, the value of this variable is automatically managed by the software. For example, adding a node on a prompt with an additional variable set to true will add this variable value to the node. Subsequently deleting or removing the node from the prompt will remove this value.