<template>
    <div id="app">
        <h1>Payment Page</h1>

        <label for="payment">Select payment method:</label>

        <select id="payment" v-model="selectedPaymentMethod">
            <option value="Cash">Cash</option>
            <option value="NETS">NETS</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="AMEX">American Express</option>            
        </select>
        
        <p>Paying by: <b>{{selectedPaymentMethod}}</b></p>
    </div>
</template>

<script>
export default {

  data(){
    return{
        selectedPaymentMethod:""
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app{
    align-content: center;
}
</style>