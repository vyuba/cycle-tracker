<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { handleSubmit, renderPastPeriods } from './periodTracker';
	import { onMount } from 'svelte';
	
	let startDate = '';
	let endDate = '';
	let result = '';
	let nextPeriodStart = '';
	let pastPeriods = [];
  
	onMount(() => {
	  pastPeriods = renderPastPeriods();
	});
  
	const onSubmit = (e) => {
	  e.preventDefault();
	  const response = handleSubmit(startDate, endDate);
	  result = response.result;
	  if (response.success) {
		nextPeriodStart = response.nextPeriodStart;
		pastPeriods = renderPastPeriods();
		alert(`Predicted next period start: ${nextPeriodStart}`);
	  } else {
		alert(result);
	  }
	};
  </script>
  
  <svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
  </svelte:head>
  
  <section>
	<h1>
	  <span class="welcome">
		<picture>
		  <source srcset={welcome} type="image/webp" />
		  <img src={welcome_fallback} alt="Welcome" />
		</picture>
	  </span>
	</h1>
  
	<h1 class="header-text">Period Tracker</h1>
	<form on:submit={onSubmit}>
	  <fieldset>
		<legend>Enter your period start and end date</legend>
		<p>
		  <label for="start-date">Start date</label>
		  <input type="date" id="start-date" bind:value={startDate} required />
		</p>
		<p>
		  <label for="end-date">End date</label>
		  <input type="date" id="end-date" bind:value={endDate} required />
		</p>
	  </fieldset>
	  <p>
		<button type="submit">Add Period</button>
	  </p>
	</form>
  
	<div id="past-periods">
	  <h2>Past Periods</h2>
	  {#if pastPeriods.length > 0}
		<ul>
		  {#each pastPeriods as period}
			<li>{period}</li>
		  {/each}
		</ul>
	  {:else}
		<p>No periods recorded.</p>
	  {/if}
	  <p>{result}</p>
	  <div class="nextPeriodStart">
		{#if nextPeriodStart}
		  <p>Predicted next period start: {nextPeriodStart}</p>
		{/if}
	  </div>
	</div>
  </section>
  
  <style>
		section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	.header-text{
		color: #ff3e00aa;
		font-size: 40px;
		font-weight: 600;
	}

	form{
		background-color: white;
		padding: 60px 30px;
		border: 2px solid #ff3e00aa;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	fieldset{
		border: none;
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center
	}
  </style>