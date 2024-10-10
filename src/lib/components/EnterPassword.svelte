<script>
    import profile from "$lib/images/Group 118.svg";
    export let onNext;
    let password = ''
    let errorMessage = ''

    function validatePassword() {
        const minLength = 8;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const numberRegex = /\d/;
        const upperCaseRegex = /[A-Z]/;
        const lowerCaseRegex = /[a-z]/;

        // Check if password meets all criteria
        if (password.length < minLength) {
        errorMessage = `Password must be at least ${minLength} characters long.`;
        } else if (!specialCharRegex.test(password)) {
        errorMessage = 'Password must include at least one special character.';
        } else if (!numberRegex.test(password)) {
        errorMessage = 'Password must include at least one number.';
        } else if (!upperCaseRegex.test(password)) {
        errorMessage = 'Password must include at least one uppercase letter.';
        } else if (!lowerCaseRegex.test(password)) {
        errorMessage = 'Password must include at least one lowercase letter.';
        } else {
            errorMessage = '';
            alert('Password is secure!');
            onNext()
        }
  }
    function handleNext() {
        validatePassword()
    }
  </script>
  
  <section>
    <div class="sign-up flex flex-col gap-12 ">

        <div class="w-full  flex flex-col justify-between gap-10 h-full relative">
            {#if errorMessage}
            <span class="error-message absolute top-1 transition-all left-[50%] translate-x-[-50%] capitalize px-2 py-1 bg-red-700 rounded-md text-sm flex items-center justify-between gap-2 w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                <p class=" whitespace-nowrap">{errorMessage}</p>
            </span>
            {/if}
            <div class="w-full flex flex-col items-center justify-center gap-8">
                <div class="w-[176px] h-[176px] grid place-items-center rounded-full bg-[#191A1C]">
                    <img src={profile} alt="">
                </div>
                <div class="w-full text-center gap-2 flex flex-col ">
                    <span class="text-lg">Enter your password</span>
                    <div class="w-full py-5 px-3 rounded-[15px]  text-white bg-[#191A1C]">
                        <input 
                        bind:value={password}
                        placeholder="Password"
                        class="bg-transparent w-full outline-none" type="password">
                    </div>
                </div>
            </div>
            <div class="w-full flex flex-col gap-1 items-center">
                <span class="text-xs font-medium capitalize">choose yur password</span>
                <button on:click={handleNext} class="h-[55px] w-full bg-[#191A1C] text-white rounded-full capitalize font-medium hover:border">
                    <a href="/SignUp/sign-up">
                        Next
                    </a>
                </button>
            </div>
        </div>
    </div>
  </section>
  
  <style>
  
  </style>