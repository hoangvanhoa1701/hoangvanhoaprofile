<template>
  <section class="pageCaseStudyDetail breadcrumbContainer container-fluid" v-show="isShow">
    <nav class="breadcrumbCustom" aria-label="breadcrumb" v-if="routes.length > 0">
      <div class="container fix1440CustomStorm12">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link :to="localePath('index')">{{L('Home')}}</nuxt-link>
          </li>
          <li
            class="breadcrumb-item"
            v-for="(item, index) in routes"
            :key="index"
            :class="{ active:routes.length==index}"
          >
            <nuxt-link :to="item.href">{{item.name}}</nuxt-link>
          </li>
        </ol>
      </div>
    </nav>
  </section>
</template>

<script>
// import BreadcrumbService from "@/api/breadcrumb"
import {
  EnumCategoryTypes,
  EnumBusinessAreaIds,
  EnumProductCategoryIds,
  EnumProductCategoryTypes
} from "@/api/enum/enums"
import { getEntityInfo, isShowIndexPage } from "@/misc/helpers/slug"

export default {
  name: "breadcrumb",
  props: {
    dataBreadcrumb: {
      type: Object,
      default: {
        url: "",
        name: "",
        categoryTypes: null,
        categoryId: null,
        businessAreaId: null
      },
      required: true
    }
  },
  data: () => {
    return {
      isShow: true,
      routes: [],
      breadcrumbPrefix: "breadcrumb"
    }
  },
  mounted() {
    // this.getBreadcrumb()
    this.renderBreadCrumb()
  },
  methods: {
    renderBreadCrumb() {
      if (!this.dataBreadcrumb.url) {
        // this.isShow=false;
        return false
      }
      this.routes = []
      let { entityName, entityId } = getEntityInfo(this.dataBreadcrumb.url)
      switch (entityName) {
        case "topic":
          this.routes.push({
            href: `/about`,
            name: this.L("About")
          })
          break
        case "post":
          this.getNewsAndEventBreadCrumb(this.dataBreadcrumb.categoryTypes)
          break
        case "homeAppliances":
          this.getHomeAppliancesBreadCrumb(this.dataBreadcrumb.categoryTypes)
          break
        case "project": {
          this.routes.push({
            href: `/building-solutions`,
            name: this.L("Building solution")
          })
          this.routes.push({
            href: `/hvac?t=forOwners`,
            name: this.L("HVAC")
          })
          break
        }
        case "businessGallery":
          this.getBusinessGalleryBreadCrumb(
            this.dataBreadcrumb.businessAreaId,
            this.dataBreadcrumb.categoryTypes
          )
          break
        case "career":
          this.routes.push({
            href: `/careers`,
            name: this.L("Career")
          })
          break
        case "product":
          this.getProductBreadCrumb(this.dataBreadcrumb.categoryTypes,this.dataBreadcrumb.categoryId)
          break
        case "productBenefit":
          break 
      }
      this.routes.push({
        href: this.dataBreadcrumb.url,
        name: this.dataBreadcrumb.name
      })
    },
    getNewsAndEventBreadCrumb(categoryTypes) {
      if (categoryTypes == null) return false

      let objectBreadCrumb = {
        href: ``,
        name: ""
      }
      if (categoryTypes == EnumCategoryTypes.NewsCategory) {
        objectBreadCrumb.href = `/news?t=news`
        objectBreadCrumb.name = this.L("News Releases")
      } else if (categoryTypes == EnumCategoryTypes.EventCategory) {
        objectBreadCrumb.href = `/news?t=event`
        objectBreadCrumb.name = this.L("Events & exhibitions")
      }

      if (objectBreadCrumb.href) this.routes.push(objectBreadCrumb)
    },
    getBusinessGalleryBreadCrumb(businessAreaId, categoryTypes) {
      this.routes.push({
        href: `/business-gallery`,
        name: this.L("Business gallery")
      })

      if (businessAreaId == null) return false

      let queryStringBusinessArea

      if (businessAreaId == EnumBusinessAreaIds.BuildingSolution) {
        queryStringBusinessArea = "buildingSolution"
        this.routes.push({
          href: `/business-gallery?t=${queryStringBusinessArea}`,
          name: this.L("Building Solution")
        })
      } else if (businessAreaId == EnumBusinessAreaIds.FactoryAutomation) {
        queryStringBusinessArea = "factoryAutomation"
        this.routes.push({
          href: `/business-gallery?t=${queryStringBusinessArea}`,
          name: this.L("Factory Automation")
        })
      } else if (businessAreaId == EnumBusinessAreaIds.InfrastructureSolution) {
        queryStringBusinessArea = "infrastructureSolution"
        this.routes.push({
          href: `/business-gallery?t=${queryStringBusinessArea}`,
          name: this.L("Infrastructure Solution")
        })
      }

      if (categoryTypes == null) return false

      if (categoryTypes == EnumCategoryTypes.GalleryCategory) {
        this.routes.push({
          href: `/business-gallery?t=${queryStringBusinessArea}&c=gallery`,
          name: this.L("Gallery")
        })
      } else if (categoryTypes == EnumCategoryTypes.CaseStudyCategory) {
        this.routes.push({
          href: `/business-gallery?t=${queryStringBusinessArea}&c=caseStudy`,
          name: this.L("Case Study")
        })
      }
    },
    getHomeAppliancesBreadCrumb(categoryTypes) {
      this.routes.push({
        href: `/home-appliances-notebook`,
        name: this.L("Home Appliances Notebook")
      })

      if (categoryTypes == null) return false

      if (categoryTypes == EnumCategoryTypes.HomeAppliance_HowToChoose) {
        this.routes.push({
          href: `/home-appliances-notebook?t=howToChoose`,
          name: this.L("How to choose")
        })
      } else if (categoryTypes == EnumCategoryTypes.HomeAppliance_HowToUse) {
        this.routes.push({
          href: `/home-appliances-notebook?t=howToUse`,
          name: this.L("How to use")
        })
      } else if (
        categoryTypes == EnumCategoryTypes.HomeAppliance_Maintainance
      ) {
        this.routes.push({
          href: `/home-appliances-notebook?t=maintenance`,
          name: this.L("Maintainance")
        })
      } else if (categoryTypes == EnumCategoryTypes.HomeAppliance_Video) {
        this.routes.push({
          href: `/home-appliances-notebook?t=video`,
          name: this.L("Video")
        })
      } else if (categoryTypes == EnumCategoryTypes.HomeAppliance_FAQ) {
        this.routes.push({
          href: `/home-appliances-notebook?t=faq`,
          name: this.L("FAQ")
        })
      }
    },
    getProductBreadCrumb(categoryTypes,categoryId) {

      if (categoryTypes == null) return false

      if (categoryTypes == EnumProductCategoryTypes.BuildingSolution) {
        this.routes.push({
          href: `/building-solutions`,
          name: this.L("Building solution")
        })
      } else if (categoryTypes == EnumProductCategoryTypes.HomeAppliance) {
        this.routes.push({
          href: `/home-appliances`,
          name: this.L("Home appliances")
        })
      } else if (categoryTypes == EnumProductCategoryTypes.FactoryAutomation) {
        this.routes.push({
          href: `/factory-automation`,
          name: this.L("Factory automation")
        })
      } else if (categoryTypes == EnumProductCategoryTypes.InfrastructureSolution) {
        this.routes.push({
          href: `/infrastructure-solution`,
          name: this.L("Infrastructure solution")
        })
      } 

     if (categoryId == null) return false

      if (categoryId == EnumProductCategoryIds.FactoryAutomation) {
        this.routes.push({
          href: `/factory-automation`,
          name: this.L("Factory Automation")
        })
      } else if (categoryId == EnumProductCategoryIds.HVAC) {
        this.routes.push({
          href: `/hvac`,
          name: this.L("HVAC")
        })
      } else if (categoryId == EnumProductCategoryIds.JetTowel) {
        this.routes.push({
          href: `/jet-towel-product-list`,
          name: this.L("Jet towel")
        })
      } else if (categoryId == EnumProductCategoryIds.AirConditioning) {
        this.routes.push({
          href: `/rac-product-list`,
          name: this.L("Air Conditioning")
        })
      }  else if (categoryId == EnumProductCategoryIds.Refigerators) {
        this.routes.push({
          href: `/ref-product-list`,
          name: this.L("Refigerators")
        })
      } 
      else if (categoryId == EnumProductCategoryIds.ElectricFans) {
        this.routes.push({
          href: `/electricFans`,
          name: this.L("Refigerators")
        })
      } 
      else if (categoryId == EnumProductCategoryIds.VentilationFans) {
        this.routes.push({
          href: `/ventilation-product-list`,
          name: this.L("Ventilation Fans")
        })
      } 
      else if (categoryId == EnumProductCategoryIds.Dehumidifiers) {
        this.routes.push({
          href: `/dehumidifier-product-list`,
          name: this.L("Dehumidifiers")
        })
      } 

    }
    // getBreadcrumb() {
    //   try {
    //     this.routes = []

    //     const route = this.$route.path || this.$route.fullPath

    //     const resoledRoute = this.$router.resolve(route)

    //     if (resoledRoute && resoledRoute.route.matched.length > 0) {
    //       if (this.getRouteBaseName() !== "slug") {
    //         this.routes.push({
    //           name: this.L(`${this.getRouteBaseName()}`),
    //           href: resoledRoute.href
    //         })
    //       } else {
    //         let { entityName, entityId } = getEntityInfo(route)

    //         BreadcrumbService.getBreadcrumb(
    //             this.$axios,
    //             entityName,
    //             entityId
    //           ).then(p => {
    //             //=======================
    //             //add parent static link
    //             //=======================

    //             if (isShowIndexPage(entityName)) {
    //               this.routes.push({
    //                 name: this.L(entityName),
    //                 href: this.localePath(entityName)
    //               })
    //             }

    //             // //=======================
    //             // //add dynamic link
    //             // //=======================

    //             if (p.result.length > 0) {
    //               for (let index = 0; index < p.result.length; index++) {
    //                 const element = p.result[index]
    //                 this.routes.push({
    //                   name: element.displayName,
    //                   href: element.url
    //                 })
    //               }
    //             }
    //           })
    //       }
    //     }
    //   } catch (ex) {
    //     console.log(ex)
    //     this.isShow = false
    //   }
    // }
  },
  watch: {
    $route: function() {
      this.renderBreadCrumb()
      // this.getBreadcrumb()
    }
  }
}
</script>



