<template>
    <div class="g-container">  
        <div class="g-middle">middle</div>  
        <div class="g-left">
            
        </div>  
        <div class="g-right">right</div>  
    </div>
</template>

<script>

</script>

<style lang="scss">
    .g-container {
    // overflow: hidden;
    position: relative;
    height: 100vh;
    padding: 0 200px;
    min-width: 400px;
    
    & > div {
        height: 100vh;
        float: left;
        text-align: center;
        color: #fff;
        line-height: 100vh;
        font-size: 3vw;
    }
}

.g-middle {
    position: relative;
    width: 100%;
    background: #cc6630;
}

.g-left {
    position: relative;
    width: 200px;
    background: #ffcc00;
    margin-left: -100%;
    left: -200px;
}

.g-right {
    position: relative;
    width: 200px;
    background: pink;
    margin-left: -200px;
    right: -200px;
}
</style>