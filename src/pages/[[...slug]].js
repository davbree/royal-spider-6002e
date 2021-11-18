import React from 'react';
import { sourcebitDataClient } from 'sourcebit-targ
const sourcebit = require('sourcebit');
const sourcebitConfig = require('./sourcebit.js');et-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';
import { getComponent } from '@stackbit/components';

function Page(props) {
    const { page, site } = props;
    const { layout } = page;

    if (!layout) {
        throw new Error(`page has no layout, page '${props.path}'`);
    }
    const PageLayout = getComponent(layout);
    if (!PageLayout) {
        throw new Error(`no page layout matching the layout: ${layout}`);
    }
    return <PageLayout page={page} site={site} />;
}

export async function getStaticPaths() {

try {
    sourcebit.fetch(sourcebitConfig).catch(err => console.log(err))
} catch (err) {


}
    let data = await sourcebitDataClient.getData();
    const paths = data.pages.map((page) => page.path);
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath(params.slug);
    return { props };
}

export default withRemoteDataUpdates(Page);
