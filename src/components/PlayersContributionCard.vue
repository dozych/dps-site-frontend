<template>
	<v-card class="elevation-2">
		<v-container>
			<v-row v-for="(item, index) in members" :key="index">
				<v-col class="pr-1">
					<v-row>
						<v-img></v-img>
						<h3>{{ item.key }}</h3>
					</v-row>
				</v-col>
				<v-col cols="11" class="pl-1">
					<v-progress-linear
						color="green"
						height="35"
						:value="item.value"
						striped
					></v-progress-linear>
				</v-col>
			</v-row>
		</v-container>
	</v-card>
</template>

<script>
export default {
	props: ["members"],
	name: "PlayerContributionCard",
	components: {},
};
</script>
