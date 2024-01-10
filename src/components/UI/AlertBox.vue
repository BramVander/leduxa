<template>
    <div class="alert-box">
        <i class="fa-solid fa-lightbulb"></i>
        <slot></slot>
    </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: fit-content;
    height: fit-content;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 2rem;
    margin-block: 2rem;
    margin-inline: auto;
    border: 1px dashed;
}

.success {
    border-color: lime;
}

.warn {
    border-color: orangered;
}

.fail {
    border-color: red;
}

i {
    color: gold;
    margin: auto;
    margin-bottom: 10px;
    font-size: 30px;
}

</style>