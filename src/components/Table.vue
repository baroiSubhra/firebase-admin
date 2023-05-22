<template>
  <div class="tbl-wrap">
    <table class="tbl">
      <thead class="tbl-hdr-ctr">
        <tr class="tbl-hdrs">
          <th scope="col" class="tbl-hdr">Name</th>
          <th scope="col" class="tbl-hdr">email</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tbl-row" v-for="(data, index) in dataList" :key="index">
          <th scope="row" class="tbl-row-el">{{ data.name }}</th>
          <td class="tbl-row-el">{{ data.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Object,
      default: undefined
    }
  }
}
</script>

<style scoped>
.tbl-wrap {
  overflow-x: auto;
  position: relative;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 100%;
  border-radius: 10px;
}

.tbl {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: left;
  width: 100%;
}

.tbl-hdr {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 50%;
}

.tbl-hdr-ctr {
  background-color: #374151;
  color: white;
  font-size: 0.75rem;
  line-height: 1rem;
  text-transform: uppercase;
}

.tbl-row {
  background-color: #1f2937;
  color: white;
  border-bottom-width: 1px;
}

.tbl-row-el {
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
</style>
