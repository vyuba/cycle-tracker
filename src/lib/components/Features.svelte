<script>
  import FeatureCards from "./FeatureCards.svelte";
  export let onNext

  let songs = [
    {
      name: 'Mentally',
      artist: 'Juice'
    },
    {
      name: 'Lucid Dreams',
      artist: 'Juice WRLD'
    },
    {
      name: 'Lucid Dreams',
      artist: 'Juice WRLD'
    },
    {
      name: 'All Girls Are the Same',
      artist: 'Juice WRLD'
    }
  ];
</script>


<div class="features flex flex-col w-full h-[calc(100vh-100px)] justify-between ">
    <h1 class="text-base font-bold text-center">Browse our features</h1>
    <div class="w-full flex items-center justify-center">
        <div class="bg-white w-[243px] h-[296px] rounded-[15px] py-[16px] px-[15px] grid  grid-cols-2 ">
            {#each songs as song}
                <FeatureCards song={song}/>
            {/each}
        </div>
    </div>
    <div class="flex flex-col w-full items-center justify-center gap-4" >
        <h5 class="text-center">Organize your music the way you want</h5>
        <div class="flex gap-1 w-fit">
            <span class="w-[5px] h-[5px] rounded-full bg-white"></span>
            <span class="w-[5px] h-[5px] rounded-full bg-[#191A1C]"></span>
            <span class="w-[5px] h-[5px] rounded-full bg-[#191A1C]"></span>
            <span class="w-[5px] h-[5px] rounded-full bg-[#191A1C]"></span>
        </div>
        <button on:click={onNext} class="h-[55px] w-full bg-[#191A1C] hover:border text-white rounded-full capitalize font-medium">
                continue
        </button>
    </div>
</div>

<style>

</style>