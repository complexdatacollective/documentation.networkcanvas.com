---
layout: default
title: Input Controls
parent: Key Concepts
---
## Variable Types

**Boolean** - these variables represent dichotomous categories (e.g. true/false)

> Input control: _Toggle_ - this input control provides a switch that can be toggled on or off
> Validation: Required

**Categorical** - these variables represent nominal categories or characteristics that have no intrinsic ordering or hierarchy (e.g. gender, nationality, etc.

> Input control: _CheckBoxGroup_ - this input control provides a group of checkboxes so that multiple values can be toggled on or off

> Validations: MinSelected, MaxSelected, Required

> Input control: _ToggleButtonGroup_ - this input control provides a group of colorful circles that can be toggled on or off, and allows for multiple selection by default

> Validations: MinSelected, MaxSelected, Required

**Datetime** - these variables represent a point in time (e.g. YYYY-MM-DD, YYYY-MM, or YYYY)

> Input control: _DatePicker_ - this input control provides a calendar date picker that allows for quick data entry of year, month, and day

> Validations: Required

> Input control: _RelativeDatePicker_ - this input control provides a calendar date picker that automatically limits available dates relative to an “anchor date” which can be configured to the date of the interview session

> Validations: Required

**Layout** - these variables represent the x, y coordinates of the nodes on the Sociogram constrained to a range of [-1, 1]

> Input control: _Layout_ - there is no input control for this variable

> Validations: There are no customizable validations for this variable

**Number** - these variables represent integer values (e.g. age, etc.)

> Input control: _Number Input_ - this input control provides a single field for numerical data collection and will provide a number pad if available

> Validations: MaxValue, MinValue, Required

**Ordinal** - these variables represent categories that are ordered hierarchically (e.g. frequency of contact, level of education, etc.)

> Input control: _LikertScale_ - this input control provides a likert-type scale in the form of a slider. Values are derived from the option properties of this variable, with labels for each option label

> Validations: Required

> Input control: _RadioGroup_ - this input control provides a group of options and allows for a single choice

> Validations: Required

**Scalar** - these variables represent a normalized value (number or string) within a scale (e.g. pain measurement)

> Input control: _VisualAnalogScale_ - this input control sets a normalized value between 0 and 1 representing the position of the slider between each end of the scale

> Validations: Required

**Text** - these variables represent text data (e.g. names, qualitative responses, etc.)

> Input control: _Text Area_ - this input control provides for simple data entry of more than 30 characters

> Validations: MinLength, MaxLength, Required

> Input control: _Text Input_ - this input control provides for simple data entry of up to approximately 30 characters

> Validations: MinLength, MaxLength, Required

