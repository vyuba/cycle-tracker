<script>
    import profile from "$lib/images/Group 118.svg";
  export let onNext
  function moveFocus(current, direction, event = null) {
  const inputs = document.querySelectorAll('.verification-container input');
  const index = Array.prototype.indexOf.call(inputs, current);

  if (direction === 'next' && current.value.length === 1) {
    if (index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  }

  if (direction === 'prev' && event.key === 'Backspace' && !current.value) {
    if (index > 0) {
      inputs[index - 1].focus();
    }
  }
}

function handleInput(current) {
  // Allow only numbers
  if (!/^\d$/.test(current.value)) {
    current.value = '';
    return;
  }
  moveFocus(current, 'next');
  current.style.animation = 'none';
  current.offsetHeight; /* trigger reflow */
  current.style.animation = null;
}
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
                        <input type="text" maxlength="1" on:input={event => handleInput(event.target)} on:keydown={event => moveFocus(event.target, 'prev', event)} />
                        <input type="text" maxlength="1" on:input={event => handleInput(event.target)} on:keydown={event => moveFocus(event.target, 'prev', event)} />
                        <input type="text" maxlength="1" on:input={event => handleInput(event.target)} on:keydown={event => moveFocus(event.target, 'prev', event)} />
                        <input type="text" maxlength="1" on:input={event => handleInput(event.target)} on:keydown={event => moveFocus(event.target, 'prev', event)} />
                                    </div>
                </div>
            </div>
            <div class="w-full flex flex-col gap-1 items-center">
                <span class="text-xs font-medium capitalize">We will send you a verification code to this number</span>
                <button on:click={onNext} class="h-[55px] w-full bg-[#191A1C] text-white rounded-full capitalize font-medium">
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