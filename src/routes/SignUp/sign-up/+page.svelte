<script>
  import profile from "$lib/images/Group 118.svg";
  import plus from "$lib/images/plus.svg";
  import albumImage from "$lib/images/Rectangle 4.png";
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



<div class="signup-process pt-8 w-full  h-dvh">
    <button on:click={lastStep}  class="self-start underline w-7 h-7 bg-[#353535] grid place-items-center rounded-md">
        <img src={backArrow} alt="">
    </button>

    <!-- Dynamically render the current step component -->
    <svelte:component this={steps[currentStep]}  onNext={nextStep} />
  </div>
<style>

    



  /*pfp addign styling*/

  .profile-picture{
    background-image: url('$lib/images/Rectangle 4.png');
  }


  /*features styling*/

</style>

