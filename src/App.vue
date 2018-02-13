<template>
	<div id="app">
		<h1>Top News</h1>
		<router-view/>
	</div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Bree+Serif);
@import url(https://fonts.googleapis.com/css?family=Raleway);

html,
body {
  background-color: #e5e5e5;
  min-height: 100vh;
  font-family: "Raleway", sans-serif;
}

#app {
  width: 85%;
  margin: 0 auto;
}

@media (max-width: 990px) {
  #app {
    width: 100%;
  }
}

#app h1 {
  color: #444;
  font-size: 1.5em;
  margin: 15px 10px;
}
</style>
