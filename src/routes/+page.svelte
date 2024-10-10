<script>
	// import { handleSubmit, renderPastPeriods } from './periodTracker';
	// import { onMount } from 'svelte';
	
	// let startDate = '';
	// let endDate = '';
	// let result = '';
	// let nextPeriodStart = '';
	// let pastPeriods = [];
  
	// onMount(() => {
	//   pastPeriods = renderPastPeriods();
	// });
  
	// const onSubmit = (e) => {
	//   e.preventDefault();
	//   const response = handleSubmit(startDate, endDate);
	//   result = response.result;
	//   if (response.success) {
	// 	nextPeriodStart = response.nextPeriodStart;
	// 	pastPeriods = renderPastPeriods();
	// 	alert(`Predicted next period start: ${nextPeriodStart}`);
	//   } else {
	// 	alert(result);
	//   }
	// };


  import backArrow from "$lib/images/backArrow.svg";


  import StepOne from '$lib/components/Username.svelte';
  import StepTwo from '$lib/components/PhoneNumber.svelte';
  import StepThree from '$lib/components/EnterCode.svelte';
  import StepFour from '$lib/components/EnterPassword.svelte';
  import StepFive from '$lib/components/AddPfp.svelte';
  import StepSix from '$lib/components/Features.svelte';
  import StepSeven from '$lib/components/Welcome.svelte';

  let currentStep = 0; // Tracks the current step

  // Array of components for each step
  const steps = [StepOne, StepTwo, StepThree, StepFour, StepFive, StepSix, StepSeven];

  // Handle moving to the next step
  function nextStep() {
    if (currentStep < steps.length - 1) {
      currentStep += 1;
    }
  }

  function lastStep() {
    if (currentStep < steps.length - 1) {
      currentStep -= 1;
    }
  }
  </script>
  
  <svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
  </svelte:head>
  
  <section>
	<div class="signup-process pt-8">
		<button on:click={lastStep}  class="self-start underline w-7 h-7 bg-[#353535] grid place-items-center rounded-md">
			<img src={backArrow} alt="">
		</button>
	
		<!-- Dynamically render the current step component -->
		<svelte:component this={steps[currentStep]}  onNext={nextStep} />
	  </div>
  </section>
  
  <style>
  </style>