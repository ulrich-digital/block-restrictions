import { addFilter } from '@wordpress/hooks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { cloneElement, createElement } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { registerBlockStyle } from '@wordpress/blocks';

registerBlockStyle('core/group', {
    name: 'neuigkeit',
    label: 'Neuigkeit',
});

const STYLE_RESTRICTIONS = {
    'is-style-neuigkeit': [
        'core/heading',
        'core/paragraph',
        'details-dropdown-block-ud/details-dropdown',
    ],
};

addFilter(
    'blocks.registerBlockType',
    'block-restrictions/override-core-group-edit',
    (settings, name) => {
        if (name !== 'core/group') return settings;

        const originalEdit = settings.edit;

        settings.edit = (props) => {
            const { className } = props.attributes;
            const blockProps = useBlockProps();

            const matchingStyle = Object.keys(STYLE_RESTRICTIONS).find(style =>
                className?.includes(style)
            );

            const allowedBlocks = matchingStyle ? STYLE_RESTRICTIONS[matchingStyle] : undefined;

            return createElement(
                'div',
                blockProps,
                createElement(InnerBlocks, { allowedBlocks }),
            );
        };

        return settings;
    }
);


