---
title: Configuring Devices Prior To Starting Data Collection
wip: false
---
It is important to take the time to optimize the interview experience prior to starting data collection. Different hardware, as well as the specific needs of your research population - as well as the needs of an individual participant - all impact the way you should configure Interviewer in order to create the ideal environment.

Aside from these concerns, there are also some fundamental steps you should take to ensure secure and stable data collection. This article will describe these steps in sequence.

## Disable automatic updates

Because both Google and Apple tablet devices are set to automatically update software by default, you could end up in a situation where a new release of Interviewer renders your protocol unable to run. Alternatively, an update to Interviewer may change behavior in the middle of your data collection, leading to inconsistency. For this reason, **we recommend that you disable app updates entirely on these devices**, and handle this process manually.

<details markdown="1">

<summary>Instructions for disabling app auto-updates on Android devices</summary>

1. Open the Google Play Store app.  
2. On the upper left side of the screen, tap the menu icon.  
3. Tap "Settings".  
4. Tap "Auto-update apps".  
5. Tap "Don't auto-update apps".  
6. Tap "Done".  

</details>  

<details markdown="1">

<summary>Instructions for disabling auto-updates on iOS devices</summary>

1. Tap on the Settings App on your main screen  
2. Tap on General > Software Update > Automatic Updates  
3. Disable automatic updates by switching it off  

</details>

If you are running Interviewer on a mac or PC, you do not need to complete this step.
{:.tip-box}

## Turn on device-level encryption features

The nature of the technologies used by Network Canvas means that we cannot meaningfully secure your data at rest, or when someone else has physical access to your device. To mitigate risks associated with this, please take the time to ensure general security best practices are observed. Specifically, ensure that you enable disk encryption on your device, and use strong user-authentication, screen lock timeouts, and other physical security measures to lock down your device.

## Configure the behavior and visual properties of Interviewer

The settings menu in Interviewer provides several important options that can help you to make the experience of the interview better suited to your device and your participant's needs.

### Text Size

The setting you most often need to adjust is the overall **text size** of the Interviewer interface. From the "visual properties" tab of the settings menu, there are two options that impact this.

![Settings menu](/assets/uploads/screen-shot-2022-06-30-at-11.58.52-am.png "The visual properties tab of the settings menu in Interviewer")

To scale all text *and interface elements*, increase or decrease the "interface scale" dropdown. By default, Interviewer will automatically increase text size and spacing as its window size increases. To disable this behavior and set a static window size, turn of "use dynamic scaling".

Remember that these settings can, and should, be adjusted when required during the interview.
{:.tip-box}

### Fullscreen Forms

If you are using a device that lacks a physical keyboard, we recommend turning on the "use fullscreen forms" option. This will enable a specially adapted full screen interface for name generator forms, which will allow the participant to see the input that they are typing into while the software keyboard is shown. Consult the images below to see how this looks in practice.



![A form with "use fullscreen forms" turned off](/assets/uploads/screen-shot-2022-06-30-at-11.43.40-am.png "A form with \"use fullscreen forms\" turned off")

![A form with "use fullscreen forms" turned on](/assets/uploads/screen-shot-2022-06-30-at-11.43.58-am.png "A form with \"use fullscreen forms\" turned on")