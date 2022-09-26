<script>
    import '../app.css';
    import Navbar from '../components/Navbar.svelte';
</script>

<div class="min-h-screen bg-[#5865F2] static">
    <Navbar class="sticky top-o z-50" />
    <slot class="relative" />
</div>
