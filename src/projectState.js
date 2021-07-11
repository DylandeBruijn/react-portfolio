//Import Images
import projectOneOverview from "./img/project-1-overview.png";
import projectTwoOverview from "./img/project-2-overview.png";
import projectThreeOverview from "./img/project-3-overview.png";
import projectOneDetail from "./img/project-1-detail.png";
import projectTwoDetail from "./img/project-2-detail.jpg";
import projectThreeDetail from "./img/project-3-detail.jpg";

export const ProjectState = () => {
	return [
		{
			title: "Project 1",
			mainImg: projectOneOverview,
			secondaryImg: projectOneDetail,
			url: "/work/project-1",
			features: [
				{
					title: "Title 1",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "Title 2",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "Title 3",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
			],
		},
		{
			title: "Project 2",
			mainImg: projectTwoOverview,
			secondaryImg: projectTwoDetail,
			url: "/work/project-2",
			features: [
				{
					title: "Title 1",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "Title 2",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "Title 3",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
			],
		},
		{
			title: "Project 3",
			mainImg: projectThreeOverview,
			secondaryImg: projectThreeDetail,
			url: "/work/project-3",
			features: [
				{
					title: "Title 1",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "Title 2",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "Title 3",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
			],
		},
	];
};
