<script setup>
import {ref , onMounted} from 'vue'
const searchBox = ref('')
</script>
<template>
    <div class="search-header">
        <input placeholder="搜索" class="search-header__input" type="text" v-model="searchBox" />
        <button class="search-header__button">
            <svg
            fill="none"
            viewBox="0 0 18 18"
            height="18"
            width="18"
            class="search-header__icon"
            >
            <path
                fill="#3A3A3A"
                d="M7.132 0C3.197 0 0 3.124 0 6.97c0 3.844 3.197 6.969 7.132 6.969 1.557 0 2.995-.49 4.169-1.32L16.82 18 18 16.847l-5.454-5.342a6.846 6.846 0 0 0 1.718-4.536C14.264 3.124 11.067 0 7.132 0zm0 .82c3.48 0 6.293 2.748 6.293 6.15 0 3.4-2.813 6.149-6.293 6.149S.839 10.37.839 6.969C.839 3.568 3.651.82 7.132.82z"
            ></path>
            </svg>
        </button>
    </div>

</template>


<style lang="scss" scoped>
.search-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.search-header__input {
  font-family: inherit;
  font-size: 16px;
//   background-color: #0a0a0a;
background-color: #e4e5e6;
  border: solid 0.5px #525252;
  color: #646464;
  padding: 0.7rem 1rem;
  border-radius: 25px;
  width: 200px;
  height: 12px;
  transition: all ease-in-out 0.5s;
  margin-right: -2rem;
  opacity: 1;
  text-align: center;
}

.search-header__input:hover,
.search-header__input:focus {
  box-shadow: 0 0 1em #00000013;
}

.search-header__input:focus {
  outline: none;
//   border: px solid #907171;
  background-color: #F7F8FA;
}

.search-header__input::-webkit-input-placeholder {
  font-weight: 100;
  color: #3a3a3a;
}

.search-header__input:focus + .search-header__button {
  background-color: transparent;
}

.search-header__button {
  border: none;
  background-color: transparent;
  margin-top: 0.1em;
}

.search-header__button:hover {
  cursor: pointer;
}

.search-header__icon {
  height: 1.3em;
  width: 1.3em;
  fill: #3a3a3a;
}

</style>