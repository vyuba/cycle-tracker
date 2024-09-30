<script>
  import logo from "$lib/images/Listen.svg";
  import { page } from '$app/stores';
</script>

<div class="sign-up">
  <div class="items-center justify-center flex w-full h-full">
    <img src={logo} alt="" />
  </div>
  <div class="w-full flex flex-col gap-5">
    <div>
      <h4 class="font-bold text-center text-base">
        A sacred place for your work-in-progress music
      </h4>
      <h5 class="text-[#BEBEBE] text-sm">
        Privately listen, nurture and share your ideas
      </h5>
    </div>
    <div class="flex flex-col w-full gap-3">
      <button
        class="h-[55px] w-full bg-[#191A1C] rounded-full capitalize font-medium"
        >
        <li aria-current={$page.url.pathname.startsWith('/SignUp/sign-up') ? 'page' : undefined}>
            <a href="/SignUp/sign-up">sign up</a>
        </li>
        </button
      >
      <button
        class="h-[55px] w-full bg-[#5328FE] rounded-full capitalize font-medium"
        >sign in with email</button
      >
    </div>
  </div>
</div>

<style>
  .sign-up {
    background: #080808;
    padding-inline: 44px;
    padding-block: 50px;
    position: fixed;
    width: 100%;
    height: 100vh;
    inset: 0;
    z-index: 100000;
    color: white;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
