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
		<div class="pb-4 text-xl font-bold md:pl-2 md:text-2xl">Lockheed Martin Corporation</div>
		<div class="text-6xl font-black md:text-9xl">F-22A</div>
		<div class="text-5xl font-semibold md:text-8xl">Raptor</div>
		<div class="text-md pt-4 font-semibold md:pl-2 md:text-xl">
			A twin engine, all-weather, stealth air-superiority fighter aircraft.
		</div>
	</div>
	<div class="absolute bottom-5 right-5 space-x-2">
		<Button href="https://github.com/evwltrs/jet"><Github /></Button>
		<Button href="https://1nf.me"><Globe /></Button>
	</div>
	<div class="absolute bottom-5 left-1 flex flex-col space-x-2 md:left-5">
		<p class="text-md hidden pb-2 text-gray-400 md:inline-block">
			Move mouse to manuever the plane. Click and drag to move the camera.
		</p>
		<p class="pb-2 text-xs text-gray-400 md:hidden">Hold and drag to manuever the plane</p>
		<p class="text-[8px] text-gray-400 md:text-xs">
			3D model by <a href="https://sketchfab.com/bohmerang" class="underline">Bohmerang</a>
		</p>
	</div>
	<Canvas>
		<Scene />
	</Canvas>
</div>
