<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchPanel",
  data() {
    return {
      searchHistory: [],
      searchKey: "",
      searchWay: "百度",
      visible: false,
      searchEngineOptions: [
        {
          name: "百度",
          url: "https://www.baidu.com/s?wd=",
        },
        {
          name: "谷歌",
          url: "https://www.google.com.hk/search?q=",
        },
        {
          name: "360搜索",
          url: "https://www.so.com/s?q=",
        },
        {
          name: "Bing",
          url: "https://cn.bing.com/search?q=",
        },
      ],
    };
  },
  mounted() {
    this.searchHistory = window.localStorage.getItem("search-history")
      ? JSON.parse(window.localStorage.getItem("search-history"))
      : [];
  },
  methods: {
    setSearchKey(key) {
      this.searchKey = key;
      this.visible = false;
      this.search();
    },
    search() {
      const searchWay = this.searchEngineOptions.find(
        (item) => item.name === this.searchWay
      );
      window.open(`${searchWay.url}${this.searchKey}`);
      this.saveHistory();
      this.searchKey = "";
    },
    saveHistory() {
      this.searchHistory.unshift(this.searchKey);
      if (this.searchHistory.length > 5) {
        this.searchHistory.pop();
      }
      window.localStorage.setItem(
        "search-history",
        JSON.stringify(this.searchHistory)
      );
    },
  },
});
</script>

<template>
  <div class="search-panel">
    <el-popover
      :visible="visible"
      placement="bottom"
      title="搜索历史"
      :width="500"
      trigger="click"
    >
      <ul class="history-list">
        <li
          v-for="(item, index) in searchHistory"
          :key="index"
          @click="setSearchKey(item)"
        >
          {{ item }}
        </li>
      </ul>
      <template #reference>
        <el-input
          v-model="searchKey"
          placeholder="请输入搜索内容"
          class="input-with-select"
          @focus="visible = true"
          @blur="visible = false"
          @keyup.enter="search"
        >
          <template #prepend>
            <el-select
              v-model="searchWay"
              placeholder="Select"
              style="width: 100px"
            >
              <el-option
                v-for="(item, index) in searchEngineOptions"
                :key="index"
                :label="item.name"
                :value="item.name"
              />
            </el-select>
          </template>
        </el-input>
      </template>
    </el-popover>
  </div>
</template>

<style scoped lang="scss">
.search-panel {
  display: block;
  position: absolute;
  z-index: 1;
  top: 27vh;
  .input-with-select {
    width: 500px;
  }
}
.history-list {
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    border-bottom: 1px solid #eee;
    cursor: pointer;
    padding: 10px;
    &:hover {
      background-color: #efefef;
    }
  }
}
</style>
