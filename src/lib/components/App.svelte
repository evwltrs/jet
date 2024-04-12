<script>
	import { Canvas } from '@threlte/core'
	import { useProgress } from '@threlte/extras'
	import { tweened } from 'svelte/motion'
	import { fade } from 'svelte/transition'
	import Scene from './Scene.svelte'

	import { Github, Globe } from 'lucide-svelte'
	import Button from './Button.svelte'

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
		class="absolute flex h-full w-full flex-col items-center justify-center gap-1.5 bg-black text-white"
	>
		<p class="text-xl">Loading</p>
		<div class="relative h-3 w-1/3 border border-white">
			<div class="h-full bg-white" style="width: {$tweenedProgress * 100}%" />
		</div>
	</div>
{/if}
<div class="relative h-full antialiased">
	<div class="absolute left-10 top-10 text-white">
		<div class="pb-4 md:pl-2 text-xl md:text-2xl font-bold">Lockheed Martin Corporation</div>
		<div class="text-6xl md:text-9xl font-black">F-22A</div>
		<div class="text-5xl md:text-8xl font-semibold">Raptor</div>
		<div class="md:pl-2 pt-4 text-md md:text-xl font-semibold">
			A twin engine, all-weather, stealth air-superiority fighter aircraft.
		</div>
	</div>
	<div class="absolute bottom-5 right-5 space-x-2">
		<Button href="https://github.com/evwltrs/jet"><Github /></Button>
		<Button href="https://1nf.me"><Globe /></Button>
	</div>
	<div class="absolute bottom-5 left-5 space-x-2">
		<p class="text-gray-400 text-xs pb-4 md:hidden">Hold and drag to manuever the plane</p>
		<p class="text-gray-400 text-md pb-2 hidden md:block">Move mouse to manuever the plane.
		Click and drag to move the camera.
		</p>
	</div>
	<Canvas>
		<Scene />
	</Canvas>
</div>
