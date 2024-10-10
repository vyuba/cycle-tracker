<script>
import image1 from '$lib/images/Ellipse 1405.png';
import image2 from '$lib/images/Ellipse 1406.png';
import image3 from '$lib/images/Ellipse 1484.png';
import image4 from '$lib/images/Ellipse 1485.png';
import image5 from '$lib/images/Place your Design.png'
</script>

<div class="loader">
    <div class="text-container"> 
        <h1>
            Experience music in 
           real-time 
           with others.
       </h1>
       <h4>
           Today's top talent, featured artists, and playlists.
       </h4>
    </div>

    <img src={image1} alt="">
    <img src={image2} alt="">
    <img src={image3} alt="">
    <img src={image4} alt="">


    <img src={image5} alt="">
</div>

<style>

    .loader{
        background: #080808;
        position: absolute;
        width: 100%;
        height: 100vh;
        inset: 0;
        z-index: 100000;
        color: white;
        text-transform: capitalize;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loader > img{
        position: absolute;
        z-index: -1;
    }

    .loader > img:nth-child(4){
        top: 188px;
        right: 29px;
    }
    .loader > img:nth-child(5){
        top: 109px;
        left: 98px;
    }
    .loader > img:nth-child(2){
        bottom: 70px;
        right: 260px;
    }
    .loader > img:nth-child(3){
        bottom: 100px;
        right: 20px;
    }
 
    .text-container{
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        justify-content: center;
    }

    .text-container > h1 {
        background: linear-gradient(113.66deg, #FFFFFF 14.26%, #CBCBCB 22.91%, #F4F4F4 32.74%, #505050 38.97%, #F0F0F0 55.49%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 44px;
        font-weight: 500;
        text-align: left;
    }

    .text-container > h4{
        color: linear-gradient(113.66deg, #FFFFFF 14.26%, #CBCBCB 22.91%, #F4F4F4 32.74%, #505050 38.97%, #F0F0F0 55.49%);
        font-size: 16px;
        font-weight: 500;
    }
</style>