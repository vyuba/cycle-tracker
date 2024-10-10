<script>
  import Header from "./Header.svelte";
  import "../app.css";
  import { onMount } from "svelte";
  import Loader from "./Loader.svelte";

  async function detectSWUpdate() {
    const registration = await navigator.serviceWorker.ready;

    registration.addEventListener("updatefound", (event) => {
      const newSW = registration.installing;
      newSW.addEventListener("statechange", (event) => {
        if (newSW.state == "installed") {
          if (confirm("new update reload to uplaod?")) {
            window.location.reload();
          }
          // New service worker is installed, but waiting activation
        }
      });
    });
  }

  onMount(() => {
    detectSWUpdate();
  });

  let loader = false

  function displayData() {
    setTimeout(() => {
      loader = true
    }, 5000); // 5000 ms = 5 seconds
  }

  // Call the function to display data
  displayData();
</script>

<div class="app">
	{#if loader == false}
		<Loader />
	{/if}
  <!-- <Header /> -->

  <main>
    <div class="main-app">
      <slot />
    </div>
  </main>
<!-- 
  <footer>
    <p>
      visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
    </p>
  </footer> -->
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    max-width: 500px;
    background-color: rgb(13, 13, 22);
    margin: 0px auto;
    position: relative;
  }
  .main-app {

  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
    
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
