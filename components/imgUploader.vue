<template>
  <div class="example-full p-3 w-100">
    <div
      class="lds-dual-ring"
      v-if="loading"
    ></div>
    <div class="pull-right">
      <file-upload
        style="display:none"
        class="btn btn-primary"
        :post-action="uploadUrl"
        :data="data"
        :extensions="extensions"
        :accept="accept"
        :multiple="multiple"
        :directory="directory"
        :size="size || 0"
        :thread="thread < 1 ? 1 : (thread > 5 ? 5 : thread)"
        :headers="headersRequest"
        :drop="drop"
        :drop-directory="dropDirectory"
        :add-index="addIndex"
        v-model="files"
        @input-filter="inputFilter"
        @input-file="inputFile"
        ref="upload"
      >
        <i class="fa fa-plus"></i>
      </file-upload>

    </div>
    <div
      v-show="$refs.upload && $refs.upload.dropActive"
      class="drop-active"
    >
      <h3>{{L('Kéo thả hình ảnh')}}</h3>
    </div>
    <div class="upload">
      <div
        class="text-center p-5"
        v-if="!files.length"
      >
        <h4>{{L('Kéo thả hình ảnh')}}<br />{{L('hoặc')}}</h4>
        <label
          :for="name"
          class="btn btn-lg btn-primary"
        >{{L('Chọn hình ảnh')}}</label>

      </div>
      <draggable
        v-else
        v-model="files"
        group="files"
        :move="checkMove"
        @end="onDragEnd"
        class="tbody row"
        draggable=".column"
      >
        <div
          v-for="(file, index) in files"
          :key="file.id"
          class="column col-6"
        >

          <div class="post-module hover">

            <div
              class="thumbnail"
              :style="`background-image:url('${file.thumb}')`"
            >
              <div
                class="date"
                :class="[file.error ? 'error' : '']"
              >
                <i
                  class="fa fa-remove"
                  v-if="file.error"
                ></i>
                <i
                  class="fa fa-check"
                  v-else
                ></i>
              </div>

              <span v-if="!file.thumb">No Image</span>
            </div>

            <div class="post-content">
              <div class="category">
                <button
                  class="btn btn-danger btn-sm m-0"
                  type="button"
                  @click.prevent="remove(file)"
                >
                  <i class="fa fa-trash"></i>
                </button>
              </div>
              <h2 class="sub_title mb-1">
                <span v-if="index === 0">{{L('Hình đại diện')}}</span>
                <span v-else>{{file.data.Name || file.name}}</span>
              </h2>
              <p
                class="message"
                v-if="file.error"
              >{{file.error}}</p>
            </div>
          </div>
        </div>
        <div
          class="col-6"
          slot="footer"
        >
          <div class="btn-group pointer add-more">
            <label
              :for="name"
              class="btn btn-lg btn-primary"
            ><i class="fa fa-plus"></i></label>

          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.example-full .btn-group .dropdown-menu {
  display: block;
  visibility: hidden;
  transition: all 0.2s;
}
.example-full .btn-group:hover > .dropdown-menu {
  visibility: visible;
}

.example-full label.dropdown-item {
  margin-bottom: 0;
}

.example-full .btn-group .dropdown-toggle {
  margin-right: 0.6rem;
}

.example-full .filename {
  margin-bottom: 0.3rem;
}

.example-full .btn-is-option {
  margin-top: 0.25rem;
}
.example-full .example-foorer {
  padding: 0.5rem 0;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
}

.example-full .edit-image img {
  max-width: 100%;
}

.example-full .edit-image-tool {
  margin-top: 0.6rem;
}

.example-full .edit-image-tool .btn-group {
  margin-right: 0.6rem;
}

.example-full .footer-status {
  padding-top: 0.4rem;
}

.example-full .drop-active {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 9999;
  opacity: 0.6;
  text-align: center;
  background: #000;
}

.example-full .drop-active h3 {
  margin: -0.5em 0 0;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 40px;
  color: #fff;
  padding: 0;
}

.example-full .btn {
  padding: 0.5rem 1.75rem;
}

.table {
  th,
  td {
    vertical-align: middle;
    border: none;
  }
  thead {
    background: #36304a;
    color: #fff;
  }
  .tbody {
    width: 100%;
    display: table-row-group;
  }
  .tbody tr {
    font-size: 15px;
    color: #808080;
  }
  .tbody tr:nth-child(even) {
    background-color: #f5f5f5;
  }
}

.example-full {
  position: relative;
}

//loading animation
.lds-dual-ring {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
}
.lds-dual-ring:after {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -23px;
  margin-left: -23px;
  content: " ";
  display: block;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 5px solid #ddd;
  border-color: #ddd transparent #ddd transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.add-more {
  width: 100%;
  height: 205px;
  padding-bottom: 15px;
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .fa {
    font-size: 2em;
  }
}
.post-module {
  position: relative;
  z-index: 1;
  display: block;
  background: #fff;
  margin-bottom: 15px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  //min-width: 270px;
  //height: 470px;
  -webkit-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  .thumbnail {
    //background: #000;
    height: 150px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    .date {
      position: absolute;
      top: 15px;
      right: 15px;
      z-index: 1;
      background: #28a745;
      width: 30px;
      height: 30px;
      padding: 3px 0;
      color: #fff;
      font-weight: 700;
      text-align: center;
      border-radius: 50%;
      &.error {
        background: red;
      }
      .day {
        font-size: 18px;
      }
      .month {
        font-size: 12px;
        text-transform: uppercase;
      }
    }
    img {
      display: block;
      width: 120%;
    }
  }
  .post-content {
    position: relative;
    // bottom: 0;
    background: #fff;
    width: 100%;
    padding: 10px;
    .category {
      position: absolute;
      top: -31px;
      left: 0;
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
    }
    .title {
      margin: 0;
      padding: 0 0 10px;
      color: #000;
      font-size: 26px;
      font-weight: 700;
    }
    .sub_title {
      margin: 0;
      color: rgba(0, 0, 0, 0.7);
      font-size: 14px;
      font-weight: 400;
      display: block;
      height: 33.6px; /* Fallback for non-webkit */
      line-height: 1.2;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .message {
      color: red;
      font-size: 12px;
    }
    .description {
      display: none;
      color: #ccc;
      font-size: 14px;
      line-height: 1.8em;
    }
    .post-meta {
      margin: 30px 0 0;
      color: #ddd;
      .timestamp {
        margin: 0 16px 0 0;
      }
      a {
        color: #ddd;
        text-decoration: none;
      }
    }
  }
}
</style>

<script>
import Cropper from "cropperjs"
import ImageCompressor from "@xkeshi/image-compressor"
import FileUpload from "vue-upload-component"
import draggable from "vuedraggable"

export default {
  props: ["value", "pictures"],
  components: {
    FileUpload,
    draggable
  },
  computed: {
    getUrl() {
      return process.env.adminUrl + "/Api/GetPicture"
    },
    updateUrl() {
      return this.$axios.defaults.baseURL + "/Api/Update"
    },
    removeUrl() {
      return process.env.adminUrl + "/Api/Remove"
    },
    uploadUrl() {
      return process.env.adminUrl + "/Api/AsyncUpload"
    },
    headersRequest() {
      return {
        Authorization: this.$auth.getToken("local")
      }
    }
  },
  data() {
    return {
      loading: false,
      canDrag: true,
      files: [],
      accept: "image/png,image/gif,image/jpeg,image/webp",
      extensions: "gif,jpg,jpeg,png,webp",
      // extensions: ['gif', 'jpg', 'jpeg','png', 'webp'],
      // extensions: /\.(gif|jpe?g|png|webp)$/i,
      minSize: 1024,
      size: 1024 * 1024 * 10,
      multiple: true,
      directory: false,
      drop: true,
      dropDirectory: true,
      addIndex: false,
      thread: 3,
      name: "file",
      postAction: "",
      putAction: "",
      headers: {},
      data: {
        AvatarId: 0,
        DisplayOrder: 0
      },

      autoCompress: 1024 * 1024,
      uploadAuto: true,
      isOption: false,

      addData: {
        show: false,
        name: "",
        type: "",
        content: ""
      },

      editFile: {
        show: false,
        name: ""
      }
    }
  },
  created() {},
  mounted() {
    this.getPictures()
    //this.addPictureFromProps()
  },
  watch: {
    // pictures: function(v) {
    //   this.addPictureFromProps()
    // },
    "editFile.show"(newValue, oldValue) {
      // 关闭了 自动删除 error
      if (!newValue && oldValue) {
        this.$refs.upload.update(this.editFile.id, {
          error: this.editFile.error || ""
        })
      }

      if (newValue) {
        this.$nextTick(function() {
          if (!this.$refs.editImage) {
            return
          }
          let cropper = new Cropper(this.$refs.editImage, {
            autoCrop: false
          })
          this.editFile = {
            ...this.editFile,
            cropper
          }
        })
      }
    },

    "addData.show"(show) {
      if (show) {
        this.addData.name = ""
        this.addData.type = ""
        this.addData.content = ""
      }
    }
  },

  methods: {
    getPictures() {
      if (this.value) {
        this.$axios
          .get(this.getUrl, { params: { imgIds: this.value } })
          .then(p => {
            if (p.data) {
              for (let index = 0; index < p.data.Data.length; index++) {
                const element = p.data.Data[index]
                this.files.push({
                  data: {
                    Name: element.Name,
                    AvatarId: element.AvatarId,
                    DisplayOrder: element.DisplayOrder
                  },
                  active: true,
                  blob: element.AvatarUrl,
                  id: element.AvatarId,
                  name: element.AvatarId,
                  progress: 100.0,
                  success: true,
                  thumb: element.AvatarUrl
                })
              }
            }
          })
      }
    },
    checkMove(e) {
      const unSuccessItems = this.files.filter(p => !p.success)
      if (unSuccessItems && unSuccessItems.length > 0) {
        this.canDrag = false
        return false
      } else {
        this.canDrag = true
      }
    },
    emitValue() {
      const dataObj = this.files.map(p => p.data.AvatarId)
      this.$emit("input", dataObj.join(","))
    },
    onDragEnd(e) {
      if (!this.canDrag) {
        this.$notify({
          group: "foo",
          type: "success",
          title: "Warning",
          text: "Please upload all images."
        })
      }
      if (e) {
        this.emitValue()
        // this.loading = true
        // this.updatePictures().then(p => {
        //   this.loading = false
        // })
      }
    },
    // updatePictures() {
    //   for (let index = 0; index < this.files.length; index++) {
    //     const element = this.files[index]
    //     element.data.DisplayOrder = index
    //   }
    //   const dataObj = this.files.map(p => p.data)
    //   return this.$axios.post(this.updateUrl, dataObj)
    // },
    removePictures(file) {
      return this.$axios
        .get(this.removeUrl, {
          params: { pictureId: file.data.AvatarId }
        })
        .then(p => {
          if (p.data) {
            this.files = this.files.filter(p => {
              return p.id !== file.data.AvatarId
            })
            this.$refs.upload.remove(file)
          } else {
            this.alert("An error occurred. Please try again later.")
          }
          return p
        })
    },
    remove(file) {
      if (file && file.data.AvatarId) {
        this.loading = true
        this.removePictures(file).then(p => {
          if (p.data) {
            this.emitValue()
            this.loading = false
            // this.updatePictures().then(p => {
            //   this.loading = false
            // })
          }
        })
      } else {
        this.$refs.upload.remove(file)
      }
    },
    // addPictureFromProps() {
    //   if (this.pictures.length > 0) {
    //     const sortData = _.clone(this.pictures)
    //     sortData.sort((a, b) => {
    //       return a.DisplayOrder - b.DisplayOrder
    //     })
    //     for (let index = 0; index < sortData.length; index++) {
    //       const element = sortData[index]
    //       this.files.push({
    //         data: {
    //           AvatarId: element.AvatarId,
    //           DisplayOrder: element.DisplayOrder
    //         },
    //         active: true,
    //         blob: element.AvatarUrl,
    //         id: element.AvatarId,
    //         name: element.AvatarId,
    //         progress: 100.0,
    //         success: true,
    //         thumb: element.AvatarUrl
    //       })
    //     }
    //   }
    // },
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Before adding a file
        // 添加文件前

        // Filter system files or hide files
        // 过滤系统文件 和隐藏文件
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent()
        }

        // Filter php html js file
        // 过滤 php html js 文件
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent()
        }

        // Automatic compression
        // 自动压缩
        if (
          newFile.file &&
          newFile.type.substr(0, 6) === "image/" &&
          this.autoCompress > 0 &&
          this.autoCompress < newFile.size
        ) {
          newFile.error = "compressing"
          const imageCompressor = new ImageCompressor(null, {
            convertSize: Infinity,
            maxWidth: 512,
            maxHeight: 512
          })
          imageCompressor
            .compress(newFile.file)
            .then(file => {
              this.$refs.upload.update(newFile, {
                error: "",
                file,
                size: file.size,
                type: file.type
              })
            })
            .catch(err => {
              this.$refs.upload.update(newFile, {
                error: err.message || "compress"
              })
            })
        }
      }

      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        // Create a blob field
        // 创建 blob 字段
        newFile.blob = ""
        let URL = window.URL || window.webkitURL
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file)
        }

        // Thumbnails
        // 缩略图
        newFile.thumb = ""
        if (newFile.blob && newFile.type.substr(0, 6) === "image/") {
          newFile.thumb = newFile.blob
        }
      }
    },

    // add, update, remove File Event
    inputFile(newFile, oldFile) {
      //set default data
      // if (newFile && !newFile.data.AvatarId) {
      //   const index = _.findIndex(this.files, p => p.id === newFile.id)
      //   newFile.data.DisplayOrder = index
      // }

      if (newFile && oldFile) {
        // update
        if (newFile.active && !oldFile.active) {
          // beforeSend
          this.loading = true
          // min size
          if (
            newFile.size >= 0 &&
            this.minSize > 0 &&
            newFile.size < this.minSize
          ) {
            this.$refs.upload.update(newFile, { error: "size" })
          }
        }

        if (newFile.progress !== oldFile.progress) {
          // progress
        }

        if (newFile.error && !oldFile.error) {
          this.loading = false
          // error
        }

        if (newFile.success && !oldFile.success) {
          this.loading = false

          oldFile.data.AvatarId = oldFile.response.PictureId
          this.emitValue()
          // success
        }
      }
      if (!newFile && oldFile) {
        // remove
        if (oldFile.success && oldFile.response && oldFile.response.id) {
          // $.ajax({
          //   type: 'DELETE',
          //   url: '/upload/delete?id=' + oldFile.response.id,
          // })
        }
      }

      // Automatically activate upload
      if (
        Boolean(newFile) !== Boolean(oldFile) ||
        oldFile.error !== newFile.error
      ) {
        if (this.uploadAuto && !this.$refs.upload.active) {
          this.$refs.upload.active = true
        }
      }
    },

    alert(message) {
      alert(message)
    },

    onEditFileShow(file) {
      this.editFile = { ...file, show: true }
      this.$refs.upload.update(file, { error: "edit" })
    },

    onEditorFile() {
      if (!this.$refs.upload.features.html5) {
        this.alert("Your browser does not support")
        this.editFile.show = false
        return
      }

      let data = {
        name: this.editFile.name
      }
      if (this.editFile.cropper) {
        let binStr = atob(
          this.editFile.cropper
            .getCroppedCanvas()
            .toDataURL(this.editFile.type)
            .split(",")[1]
        )
        let arr = new Uint8Array(binStr.length)
        for (let i = 0; i < binStr.length; i++) {
          arr[i] = binStr.charCodeAt(i)
        }
        data.file = new File([arr], data.name, { type: this.editFile.type })
        data.size = data.file.size
      }
      this.$refs.upload.update(this.editFile.id, data)
      this.editFile.error = ""
      this.editFile.show = false
    },

    // add folader
    onAddFolader() {
      if (!this.$refs.upload.features.directory) {
        this.alert("Your browser does not support")
        return
      }

      let input = this.$refs.upload.$el.querySelector("input")
      input.directory = true
      input.webkitdirectory = true
      this.directory = true

      input.onclick = null
      input.click()
      input.onclick = e => {
        this.directory = false
        input.directory = false
        input.webkitdirectory = false
      }
    },

    onAddData() {
      this.addData.show = false
      if (!this.$refs.upload.features.html5) {
        this.alert("Your browser does not support")
        return
      }

      let file = new window.File([this.addData.content], this.addData.name, {
        type: this.addData.type
      })
      this.$refs.upload.add(file)
    }
  }
}
</script>