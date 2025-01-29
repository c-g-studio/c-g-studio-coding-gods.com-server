import type { Schema, Struct } from '@strapi/strapi';

export interface SharedDesctop extends Struct.ComponentSchema {
  collectionName: 'components_shared_desctops';
  info: {
    displayName: 'desctop';
  };
  attributes: {
    desctop: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedLargeImages extends Struct.ComponentSchema {
  collectionName: 'components_shared_large_images';
  info: {
    displayName: 'LargeImages';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    desctop: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tablet: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMobile extends Struct.ComponentSchema {
  collectionName: 'components_shared_mobiles';
  info: {
    displayName: 'mobile';
  };
  attributes: {
    mobile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedResponsiveImages extends Struct.ComponentSchema {
  collectionName: 'components_shared_responsive_images';
  info: {
    displayName: 'ResponsiveImages';
  };
  attributes: {
    desctop: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mobile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tablet: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTablet extends Struct.ComponentSchema {
  collectionName: 'components_shared_tablets';
  info: {
    displayName: 'tablet';
  };
  attributes: {
    tablet: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.desctop': SharedDesctop;
      'shared.large-images': SharedLargeImages;
      'shared.media': SharedMedia;
      'shared.mobile': SharedMobile;
      'shared.quote': SharedQuote;
      'shared.responsive-images': SharedResponsiveImages;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.tablet': SharedTablet;
    }
  }
}
