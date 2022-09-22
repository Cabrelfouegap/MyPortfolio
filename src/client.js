import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

export const client = SanityClient({
    projectId: 'pxk5buep',
    dataset: 'production',
    apiVersion: '2022-09-22',
    useCdn: true,
    token: 'skiUT2DrwVvror0Gvt16GYmKTEs0s0Pq8AtUGpEJmyDJjtN1479VA8XHwiHqGrhUiqLWIrYlKSOi63T3ZMvKHxyjFVZykRmGYelgrsUeabcds4kgOlkGNBy6g9C5yAOVRn9ZqQb3WlcmM3QFvVzs8xsEZBBrfrJbqp8ChYriGNKuw9dsZMilskiUT2DrwVvror0Gvt16GYmKTEs0s0Pq8AtUGpEJmyDJjtN1479VA8XHwiHqGrhUiqLWIrYlKSOi63T3ZMvKHxyjFVZykRmGYelgrsUeabcds4kgOlkGNBy6g9C5yAOVRn9ZqQb3WlcmM3QFvVzs8xsEZBBrfrJbqp8ChYriGNKuw9dsZMil',
});