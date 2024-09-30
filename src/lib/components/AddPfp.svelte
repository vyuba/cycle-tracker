<script>
    import profile from "$lib/images/Group 118.svg";
    import plus from "$lib/images/plus.svg";
    export let onNext
  </script>
  
  <section>
    <div class="profile flex flex-col gap-12 ">

        <div class="w-full  flex flex-col justify-between gap-10 h-full">
            <div class="w-full flex flex-col items-center justify-center gap-8">
                <div class="w-[230px] h-[319px] bg-[#5328FE] rounded-[35px] items-center justify-between py-10 flex flex-col">
                    <div class="w-[176px] h-[176px] grid place-items-center rounded-full bg-[#191A1C]">
                        <img src={profile} alt="">
                    </div>
                    <span>username</span>
                </div>
            </div>
            <div class="w-full flex flex-col gap-1 items-center">
                <span class="text-base font-medium capitalize">Add a profile picture</span>
                <div class="profile-picture w-[80px] bg-cover bg-center h-[80px] border-[3px] relative border-white rounded-full">
                    <div class="bg-white w-fit h-fit py-1 px-1 rounded-full absolute left-1">
                        <img src={plus} alt="">
                    </div>
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <button on:click={onNext} class="h-[55px] w-full bg-[#191A1C] text-white rounded-full capitalize font-medium">
                            Next
                    </button>
                    <button class="h-[55px] w-full bg-transparent border border-[#353535] text-white rounded-full capitalize font-medium">
                            skip
                    </button>
                </div>
                </div>
        </div>
    </div>
  </section>
  
  <style>
  
  </style>