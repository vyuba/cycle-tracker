<script>
  import albumImage from "$lib/images/Rectangle 4.png";

  export let song
</script>

<div class="w-[100px] flex flex-col">
    <div class="w-full">
        <img src={albumImage} alt="">
    </div>
    <span class="text-black capitalize font-bold">{song.name}</span>
    <span class="text-xs text-[#00000040]">{song.artist}</span>
</div>

<style>

</style>