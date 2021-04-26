<template>
  <div id="main-wrapper">
    <the-nav-header />
    <the-header />
    <the-side-nav />
    <!-- content body -->
    <div class="content-body">
      <router-view />
    </div>
    <!-- footer -->
    <div class="footer">
			<div class="copyright">
				<p>Copyright © Designed &amp; Developed by <a href="http://dexignzone.com/" target="_blank">DexignZone</a> 2020</p>
			</div>
		</div> 
  </div>
</template>

<script>
import TheHeader from '@/components/navigation/Header'
import TheNavHeader from '@/components/navigation/NavHeader'
import TheSideNav from '@/components/navigation/SideNav'
export default {
  components: {
    TheHeader,
    TheNavHeader,
    TheSideNav
  }
}
</script>