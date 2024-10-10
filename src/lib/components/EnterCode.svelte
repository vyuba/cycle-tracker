<script>
    import profile from "$lib/images/Group 118.svg";
  export let onNext
  let code = ['', '', '', ''];  // Initialize an array to store 4 digits

  function handleInput(target, index) {
    code[index] = target.value;  // Store the input at the correct index
    if (target.value && index < code.length - 1) {
      document.getElementById(`code-${index + 1}`).focus();  // Move to next input
    }
  }

  function moveFocus(target, direction, event, index) {
    if (event.key === 'Backspace' && target.value === '' && index > 0) {
      document.getElementById(`code-${index - 1}`).focus();  // Move to previous input
    }
  }

  function handleNext() {
    if (code.join('') === '1234') {
      // Move to the next step
      onNext();
    }
  }
  alert(`this is your code: 1234`)
  </script>
  
  <section>
    <div class="verification flex flex-col gap-12 ">

        <div class="w-full  flex flex-col justify-between gap-10 h-full">
            <div class="w-full flex flex-col items-center justify-center gap-8">
                <div class="w-[176px] h-[176px] grid place-items-center rounded-full bg-[#191A1C]">
                    <img src={profile} alt="">
                </div>
                <div class="w-full text-center gap-2 flex flex-col ">
                    <span class="text-lg font-bold">Enter verification code</span>
                    <div class="verification-container">
                      {#each code as value, index}
                        <input
                          type="text"
                          id={`code-${index}`}    
                          maxlength="1"          
                          bind:value={code[index]} 
                          on:input={(event) => handleInput(event.target, index)}
                          on:keydown={(event) => moveFocus(event.target, 'prev', event, index)}
                          class="input-code"   
                        />
                    {/each}
                    </div>
                </div>
            </div>
            <div class="w-full flex flex-col gap-1 items-center">
                <span class="text-xs font-medium capitalize">We will send you a verification code to this number</span>
                <button on:click={handleNext} class="h-[55px] w-full bg-[#191A1C] text-white rounded-full capitalize font-medium hover:border">
                        Next
                </button>
            </div>
        </div>
    </div>
  </section>
  
  <style>
  
.verification-container {
  display: flex;
  gap: 15px;
  padding: 20px;
  background: transparent;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  align-items: center;
  justify-content: center;
}
.verification-container input {
  width: 55px;
  height: 55px;
  font-size: 24px;
  text-align: center;
  border: 2px solid transparent;
  border-radius: 17px;
  outline: none;
  color: white;
  transition: border-color 0.3s, box-shadow 0.3s;
  transition: background-color 0.3s;
  background-color: #181818;
  caret-color: #4CAF50;
  animation: zoomIn 0.1s ease-out;
  user-select: none;
}

.verification-container input:focus {
  border-color: #fff;
  box-shadow: 0 0 10px white;
  background-color: #000000;
}


@keyframes zoomIn {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
} 

</style>