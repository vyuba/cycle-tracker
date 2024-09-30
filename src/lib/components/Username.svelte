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
                <input 
                placeholder="username"
                class="bg-transparent outline-none text-center text-white border-b-1 border-b border-b-[#2E3034]" type="text">
            </div>
            <div class="w-full flex flex-col gap-1 items-center">
                <span class="text-xs font-medium capitalize">choose our username</span>
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