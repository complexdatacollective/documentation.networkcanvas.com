---
layout: default
title: Variable Types
parent: Key Concepts
---

The Network Canvas software supports modeling data using a standard of variety data types. Below you will find these types summarized, along with relevant information about their limitations and features.

> ## Boolean
> Represents dichotomous categories with only two possible values (e.g. true/false)
>
> **Compatible Input Controls:** 
> - _Toggle_ - this input control provides a switch that can be toggled on or off
>
> **Validation Options:** Required
>
> **Notes:**



> ## Categorical
> These variables represent nominal categories or characteristics that have no intrinsic ordering or hierarchy (e.g. gender, nationality, etc.
>
> **Compatible Input Controls:** 
> - _Toggle_ - this input control provides a switch that can be toggled on or off
> - _CheckBoxGroup_ - this input control provides a group of checkboxes so that multiple values can be toggled on or off
>
> **Validation Options:** MinSelected, MaxSelected, Required
>
> **Notes:**


> ## Datetime
> These variables represent a point in time (e.g. YYYY-MM-DD, YYYY-MM, or YYYY)
>
> **Compatible Input Controls:** 
> - _DatePicker_ - this input control provides a calendar date picker that allows for quick data entry of year, month, and day
> - _RelativeDatePicker_ - this input control provides a calendar date picker that automatically limits available dates relative to an “anchor date” which can be configured to the date of the interview session
>
> **Validation Options:** MinSelected, MaxSelected, Required
>
> **Notes:**


> ## Layout
> These variables store the x, y coordinates of nodes on the Sociogram normalized to a range of [0, 1]
>
> **Notes:**
> This variable type has no validation options or input controls, because it cannot be used on a [form](./forms.md).

> ## Number
> These variables represent integer values (e.g. age, etc.)
>
> **Compatible Input Controls:** 
> - _Number Input_ - this input control provides a single field for numerical data collection and will provide a number pad if available
>
> **Validation Options:** MaxValue, MinValue, Required
>
> **Notes:**


> ## Ordinal
> These variables represent categories that are ordered hierarchically (e.g. frequency of contact, level of education, etc.)
>
> **Compatible Input Controls:** 
> - _LikertScale_ - this input control provides a likert-type scale in the form of a slider. Values are derived from the option properties of this variable, with labels for each option label
> - _RadioGroup_ - this input control provides a group of options and allows for a single choice
>
> **Validation Options:** Required
>
> **Notes:**


> ## Scalar
> These variables represent a normalized value (number or string) within a scale (e.g. pain measurement)
>
> **Compatible Input Controls:** 
> - _VisualAnalogScale_ - this input control sets a normalized value between 0 and 1 representing the position of the slider between each end of the scale
>
> **Validation Options:** Required
>
> **Notes:**


> ## Text
> These variables represent text data (e.g. names, qualitative responses, etc.)
>
> **Compatible Input Controls:** 
> - _Text Input_ - this input control provides for simple data entry of up to approximately 30 characters
> - _Text Area_ - this input control provides for simple data entry of more than 30 characters
>
> **Validation Options:** MinLength, MaxLength, Required
>
> **Notes:**
