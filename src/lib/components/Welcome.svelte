<script>
  import albumImage from "$lib/images/Rectangle 4.png";
</script>

<section>
    <div class="welcome flex flex-col gap-12 ">

        <div class="w-full  flex flex-col justify-between gap-10 h-full">
            <div class="w-full flex flex-col text-center">
                <span class="text-lg font-bold">Welcome!</span>
                <span>Sign up completed, you are ready to go!</span>
            </div>
            <div class="w-full flex flex-col items-center justify-center gap-8">
                <div class="w-[230px] h-[280px] bg-[#5328FE] rounded-[35px] items-center justify-between py-5 flex flex-col">
                    <div  class="w-[177px] h-[177px] overflow-hidden bg-cover bg-center grid place-items-center rounded-full bg-[#191A1C] border-[4px] border-white">
                        <img class="w-full" src={albumImage} alt="">
                    </div>
                    <span>username</span>
                </div>
            </div>
            <div class="w-full flex flex-col gap-1 items-center">
                <div class="flex flex-col gap-2 w-full">
                    <button class="h-[55px] w-full bg-[#191A1C] text-white hover:border rounded-full capitalize font-medium">
                        <a href="/SignUp/sign-up">
                            Enter App
                        </a>
                    </button>
                </div>
                </div>
        </div>
    </div>
</section>

<style>

</style>