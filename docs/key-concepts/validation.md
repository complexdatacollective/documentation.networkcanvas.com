---

title: Field Validation
parent: Key Concepts
---
## Overview

Configuring validation refers to the process of setting constraints on the answers a participant can give in response to question prompts within a [form](./forms.md). One or multiple validations can be configured for each field of a form depending on the needs of the particular study, but none appear by default. 
 
Setting validations on particular question prompts may help improve your data quality by minimizing extraneous and missing answers from participants. For example, if you plan to only survey participants between the ages of 18 and 24, you may want to set a validation on an [Ego Form](../interface-documentation/ego-form.md) that constrains the minValue and maxValue of a participant's answer to a question prompt asking for their age. Similarly, you may wish to require participants to provide a name for each node they nominate on a [Name Generator](../interface-documentation/name-generator.md) using forms.
 
{% include nc-image src="/assets/img/key-concepts/field-validation/1.png" %}

{% include nc-image src="/assets/img/key-concepts/field-validation/2.png" %}
 
If a validation has been set and a participant's response to the question prompt does not comply with the constraints, Interviewer will indicate the error.
 
{% include nc-image src="/assets/img/key-concepts/field-validation/3.png" %}
 
Validation options differ depending on the input control used to capture the variable in question. You can view all Interviewer input controls and corresponding validations in the [input controls](./input-controls.md) article. 
