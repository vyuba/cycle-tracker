<script>
    import profile from "$lib/images/Group 118.svg";
    export let onNext;
  </script>
  
  <section>
    <div class="sign-up flex flex-col gap-12 ">

        <div class="w-full  flex flex-col justify-between gap-10 h-full">
            <div class="w-full flex flex-col items-center justify-center gap-8">
                <div class="w-[176px] h-[176px] grid place-items-center rounded-full bg-[#191A1C]">
                    <img src={profile} alt="">
                </div>
                <div class="w-full text-center gap-2 flex flex-col ">
                    <span class="text-lg">Enter your email address</span>
                    <div class="w-full py-5 px-3 rounded-[15px]  text-white bg-[#191A1C]">
                        <input 
                        placeholder="Email"
                        class="bg-transparent w-full outline-none" type="email">
                    </div>
                </div>
            </div>
            <div class="w-full flex flex-col gap-1 items-center">
                <span class="text-xs font-medium capitalize">We will send you a verification code to this number</span>
                <button on:click={onNext} class="h-[55px] w-full bg-[#191A1C] text-white rounded-full capitalize font-medium">
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