<script>
	import { Canvas } from '@threlte/core'
	import { useProgress } from '@threlte/extras'
	import { tweened } from 'svelte/motion'
	import { fade } from 'svelte/transition'
	import Scene from './Scene.svelte'
	const { progress } = useProgress()
	const tweenedProgress = tweened($progress, {
		duration: 800
	})
	$: tweenedProgress.set($progress)
</script>

{#if $tweenedProgress < 1}
	<div
		transition:fade|local={{
			duration: 200
		}}
		class="absolute w-full h-full bg-black flex flex-col gap-1.5 items-center justify-center text-white"
	>
		<p class="text-xl">Loading</p>
		<div class="w-1/3 h-3 border border-white relative">
			<div class="h-full bg-white" style="width: {$tweenedProgress * 100}%" />
		</div>
	</div>
{/if}
<div class="h-full relative antialiased">
	<div class="absolute left-10 top-10 text-white z-0">
		<div class="text-2xl font-bold pl-2 pb-4">Lockheed Martin Corporation</div>
		<div class="text-9xl font-black">F-22A</div>
		<div class="text-8xl font-semibold">Raptor</div>
		<div class="text-xl font-semibold pl-2 pt-4">
			A twin engine, all-weather, stealth air-superiority fighter aircraft.
		</div>
	</div>
	<Canvas>
		<Scene />
	</Canvas>
</div>
