---
layout: default
title: Field Validation
parent: Key Concepts
---
## Overview

Configuring validation refers to the process of setting constraints on the answers a participant can give in response to question prompts within a [form](../key-concepts/forms.md). One or multiple validations can be configured for each field of a form depending on the needs of the particular study, but none appear by default. 
 
Setting validations on particular question prompts may help improve your data quality by minimizing extraneous and missing answers from participants. For example, if you plan to only survey participants between the ages of 18 and 24, you may want to set a validation on an [Ego Form](./ego-form.md) that constrains the minValue and maxValue of a participant's answer to a question prompt asking for their age. Similarly, you may wish to require participants to provide a name for each node they nominate on a [Name Generator](./name-generator.md) using forms.
 
[image 1]
[image 2]
 
If a validation has been set and a participant's response to the question prompt does not comply with the constraints, Network Canvas will indicate the error.
 
[image 3]
 
Validation options differ depending on the input control used to capture the variable in question. You can view all Network Canvas input controls and corresponding validations in the [input controls](../key-concepts/input-controls.md) article. 
