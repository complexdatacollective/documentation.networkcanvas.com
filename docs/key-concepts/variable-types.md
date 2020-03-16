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
> - [Toggle](../input-controls#Toggle)
>
> **Validation Options:** Required
>
> **Notes:**



> ## Categorical
> These variables represent nominal categories or characteristics that have no intrinsic ordering or hierarchy (e.g. gender, nationality, etc.
>
> **Compatible Input Controls:** 
> - [Toggle Button Group](../input-controls#Toggle-Button-Group)
> - [Checkbox Group](../input-controls#Checkbox-Group)
>
> **Validation Options:** MinSelected, MaxSelected, Required
>
> **Notes:**


> ## Datetime
> These variables represent a point in time (e.g. `YYYY-MM-DD`, `YYYY-MM`, or `YYYY`)
>
> **Compatible Input Controls:** 
> - [Date Picker](../input-controls#Date-Picker)
> - [Relative Date Picker](../input-controls#Relative-Date-Picker)
>
> **Validation Options:** MinSelected, MaxSelected, Required
>
> **Notes:**


> ## Layout
> These variables store the x, y coordinates of nodes on the Sociogram normalized to a range of `[0, 1]`.
>
> **Notes:**
> This variable type has no validation options or input controls, because it cannot be used on a [form](./forms.md).

> ## Number
> These variables represent integer values (e.g. age, etc.)
>
> **Compatible Input Controls:** 
> - [Number Input](../input-controls#Number-Input)
>
> **Validation Options:** MaxValue, MinValue, Required
>
> **Notes:**


> ## Ordinal
> These variables represent categories that are ordered hierarchically (e.g. frequency of contact, level of education, etc.)
>
> **Compatible Input Controls:** 
> - [Likert Scale](../input-controls#Likert-Scale)
> - [Radio Group](../input-controls#Radio-Group)
>
> **Validation Options:** Required
>
> **Notes:**


> ## Scalar
> These variables represent a normalized value (number or string) within a scale (e.g. pain measurement)
>
> **Compatible Input Controls:** 
> - [Visual Analog Scale](../input-controls#Visual-Analog-Scale)
>
> **Validation Options:** Required
>
> **Notes:**

> ## Text
> These variables represent text data (e.g. names, qualitative responses, etc.)
>
> **Compatible Input Controls:** 
> - [Text Input](../input-controls#Text-Input)
> - [Text Area](../input-controls#Text-Area)
>
> **Validation Options:** MinLength, MaxLength, Required
>
> **Notes:**
