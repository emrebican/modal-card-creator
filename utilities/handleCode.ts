export const handleCode = ({ global, setCode }: any) => {
  setCode({
    color: global.buttonColor,
    sizes: global.templateSize,
    content: global.templateContent,
    device: global.targetingDevice.desktop
      ? 'desktop'
      : global.targetingDevice.mobile
      ? 'mobile'
      : 'unselected',
    second: global.targetValues.second ? global.targetValues.second : 'none',
    scroll: global.targetValues.scroll ? global.targetValues.scroll : 'none',
    source: global.targetValues.source ? global.targetValues.source : 'none',
    webhook: global.targetValues.webhook ? global.targetValues.webhook : 'none',
    submission: global.targetValues.settings.submission
      ? 'selected'
      : 'unselected',
    data: global.targetValues.settings.data ? 'selected' : 'unselected',
    languages: global.languages[0] ? global.languages : 'unselected',
    exitIntent: global.exitIntentTargeting ? 'selected' : 'unselected',
    image:
      global?.image?.length < 200 ? global.image : 'please upload the image'
  })
}
