<template>
  <div>
    <el-table :data="users" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"/>
      <el-table-column prop="name" label="Name" width="180"/>
      <el-table-column prop="mail" label="Mail" width="180"/>
      <el-table-column label="Delete">
        <template slot-scope="scope">
          <el-button
            type="danger"
            @click="deleteRecord(scope.$index, users)"
            icon="el-icon-delete">
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-checkbox v-model="checked" @change="setUsers">データをリセット</el-checkbox>
  </div>
</template>

<script>
export default {
  name: 'CustomTable',
  data () {
    return {
      users: [],
      checked: false
    }
  },
  methods: {
    getUsers () {
      this.$message('データをセットしました')
      return [{
        id: 1,
        name: 'John',
        mail: 'john@example.com',
        targetId: 11
      }, {
        id: 2,
        name: 'Bob',
        mail: 'bob@example.com',
        targetId: 22
      }, {
        id: 3,
        name: 'Kate',
        mail: 'kate@example.com',
        targetId: 33
      }]
    },
    setUsers () {
      this.users = this.getUsers()
    },
    /**
     * レコードを削除します
     * @param index 消す対象レコードの行位置index
     * @param rows
     */
    deleteRecord (index, rows) {
      rows.splice(index, 1)
      this.$message('レコードを削除しました')
      if (rows.length === 0) {
        this.checked = false
      }
    }
  }
}
</script>

<style scoped>

</style>
