---
layout: default
title: Input Controls
parent: Key Concepts
---

Input controls provide a flexible way to collect variable values in [forms](../forms). Below you will find a summary of each available input control, and advice about when to use them.

{::options parse_block_html="true" /}
<div class="variable-definition">
## <a name="Checkbox-Group "></a>Checkbox Group

![image](/assets/img/key-concepts/input-controls/CheckboxGroup.png)

{: .no_toc}
### Purpose

The checkbox group is designed to provide a familiar interface for selecting one or more items from a (non-hierarchical) range of options.

Options are displayed vertically, to allow for longer labels and to create a more scannable list.

{: .no_toc}
### Do

{: .good-practices}
- You can select multiple items in one control. 
- Check that the options are not too long or text wrapping might be an issue. 

{: .no_toc}
### Don't

{: .bad-practices}
- Long checkbox groups are often hard to see on a screen. Consider using 8 or fewer options generally speaking. 
- Check boxes provide an 'implied no' meaning that if people do not check the box this _implies_ that it does not apply to them. But if you need explicit confirmation try a different control with a true/false value per option. 

</div>

{::options parse_block_html="true" /}
<div class="variable-definition">
## <a name="Date-Picker"></a>Date Picker

![image](/assets/img/key-concepts/input-controls/DatePicker.png)

{: .no_toc}
### Purpose

A date picker is used to select a date based on the current calendar. Generally date pickers select a day but you can also set it to be less granular, thereby allowing participants to select a month or simply a year. 

{: .no_toc}
### Do

{: .good-practices}
- Start on today's date. 
- Selecting a date from the current month is obvious. However, participants might not know how to select a month or year in the past easily. Consider a tip, instruction, or web video to help show them. 

{: .no_toc}
### Don't

{: .bad-practices}
- Generally participants find it difficult to provide precise dates, such as the specific date of first sexual contact. You may want to allow people to be less granular by for example letting them set a month rather than date.

</div>

{::options parse_block_html="true" /}
<div class="variable-definition">
## <a name="Likert-Scale"></a>Likert Scale

![image](/assets/img/key-concepts/input-controls/LikertScale.png)

{: .no_toc}
### Purpose

A Likert scale is a control to allow participants to select from an ordered series of options. Likert scales are widely used in psychometric research. Typically they have five ordered categories, much like "Strongly disagree", "Disagree", "Neither agree nor disagree", "Agree", and "Strongly Agree". You can select the number and value of the response categories to suit your needs. 

{: .no_toc}
### Do

{: .good-practices}
- Consider whether you want to provide a middle choice or not and mark it as neutral/ambivalent (e.g., "neither agree nor disagree" rather than unsure.  
- Consider whether you need more than five categories. Much research suggests there's limited power in using seven or more categories rather than just 5 (or even 3).

{: .no_toc}
### Don't

{: .bad-practices}
- Put the response categories out of order.

</div>

{::options parse_block_html="true" /}
<div class="variable-definition">
## <a name="Number-Input"></a>Number Input

![image](/assets/img/key-concepts/input-controls/NumberInput.png)

{: .no_toc}
### Purpose

A number input is a control that provides a single field for integer data collection. Integers can be entered with a keyboard or, if available, a number pad will appear. 

{: .no_toc}
### Do

{: .good-practices}
- Set a validation to constrain the range of possible entries when the variable value should only be positive (e.g. age).
- Use this control for capturing numeric data rather than the text input for cleaner data.

{: .no_toc}
### Don't

{: .bad-practices}
- Do not use the number input to capture date data. Date data should be captured using the datepicker.

</div>

{::options parse_block_html="true" /}
<div class="variable-definition">
## <a name="Radio-Group"></a>Radio Group

![image](/assets/img/key-concepts/input-controls/RadioGroup.png)

{: .no_toc}
### Purpose

A radio group is a control that allows participants to select a single choice from a group of (non-hierarchical) options.

Options are displayed vertically, to allow for longer labels and to create a more scannable list.

{: .no_toc}
### Do

{: .good-practices}
- Create succinct labels for options to avoid issues with text wrapping.
- Use this control when only one item should be selected.

{: .no_toc}
### Don't

{: .bad-practices}
- Avoid using long radio groups as they can be difficult for a participant to view.
- Items that are not selected provide an 'implied no', meaning that all items not selected by a participant do not apply to them. If you need explicit confirmation, consider using a different input control with a true/false value per option.
- If a participant should be able to toggle multiple items for the variable in question, consider using the checkbox group instead. 

</div>

{::options parse_block_html="true" /}
<div class="variable-definition">
## <a name="Relative-Date-Picker"></a>Relative Date Picker

![image](/assets/img/key-concepts/input-controls/RelativeDatePicker.png)

{: .no_toc}
### Purpose

A relative date picker is a control that provides a calendar date picker which automatically limits available dates relative to an "anchor date." An anchor date can be manually specified or configured to be the date of the interview session. 

{: .no_toc}
### Do

{: .good-practices}
- Specify the range of dates prior to or after the anchor date to broaden or shorten available dates a participant can select from. By default, the relative date picker uses 180 days prior to and 0 days after the anchor date. 

{: .no_toc}
### Don't

{: .bad-practices}
- If you want to allow participants to be less granular in their date selection, such as just using a month or a year rather than a date, consider using the date picker control instead.

</div>

{::options parse_block_html="true" /}
<div class="variable-definition">
## <a name="Text-Area"></a>Text Area

![image](/assets/img/key-concepts/input-controls/TextArea.png)

{: .no_toc}
### Purpose

A text area control provides participants a simple field for data entry of more than 30 characters.  

{: .no_toc}
### Do

{: .good-practices}
- Use the text area control for question prompts that require longer form responses from participants. This may be especially useful for qualitative studies.

{: .no_toc}
### Don't

{: .bad-practices}
- Avoid using a text area control when the data you want could be more effectively captured as a categorical or numeric variable. 

</div>

{::options parse_block_html="true" /}
<div class="variable-definition">
## <a name="Text-Input"></a>Text Input

![image](/assets/img/key-concepts/input-controls/TextInput.png)

{: .no_toc}
### Purpose

A text input control provides participants a field for simple data entry of up to approximately 30 characters.

{: .no_toc}
### Do

{: .good-practices}
- Consider using a text input control to capture address data or brief qualitative data. 

{: .no_toc}
### Don't

{: .bad-practices}
- Participants are not able to paste text into the text input control, so it may be necessary to instruct participants to type directly into the field rather than use a secondary platform.

</div>

{::options parse_block_html="true" /}
<div class="variable-definition">
## <a name="Toggle"></a>Toggle

![image](/assets/img/key-concepts/input-controls/Toggle.png)

{: .no_toc}
### Purpose

A toggle control provides participants a switch that can be toggled on or off.

{: .no_toc}
### Do

{: .good-practices}
- Use a toggle to easily collect simple true/false variable values.
- Consider using a toggle to set up simple network filtering rules. For example, you might create an is_ego variable that can be captured as an attribute on an [Ego Form](./ego-form.md) to identify the participant and filter their node from subsequent interview screens. 

{: .no_toc}
### Don't

{: .bad-practices}
- Only use the toggle for dichotomous variables. Where a third option is required, consider using a radio group instead. 

</div>

{::options parse_block_html="true" /}
<div class="variable-definition">
## <a name="Toggle-Button-Group"></a>Toggle Button Group

![image](/assets/img/key-concepts/input-controls/ToggleButtonGroup.png)

{: .no_toc}
### Purpose

A toggle button group is a control that provides a nonhierarchical group of colorful circles that can be toggled on or off, and allows for multiple selection. 

{: .no_toc}
### Do

{: .good-practices}
- Use a toggle button group to collect categorical data particularly for smaller groups of items.

{: .no_toc}
### Don't

{: .bad-practices}
- Avoid using labels longer than two words or it may be difficult for participants to clearly see the categories.
- Avoid using more than 8 categories for a togglebutton group as the labels will become more obscured the more categories you include. 

</div>

{::options parse_block_html="true" /}
<div class="variable-definition">
## <a name="Visual-Analog-Scale"></a>Visual Analog Scale

![image](/assets/img/key-concepts/input-controls/VisualAnalogScale.png)

{: .no_toc}
### Purpose

A visual analog scale is a control that sets a normalized value between 0 and 1 represented by the position of a slider between each end of a scale.

{: .no_toc}
### Do

{: .good-practices}
- Consider using a visual analog scale to collect variable data that is best represented on a continuum with a linear progression. Participants are able to give more precise responses on a continuum rather choose a specific option, like on a Likert scale.

{: .no_toc}
### Don't

{: .bad-practices}
- Consider using another control for variables necessitating multiple predefined items.


</div>
