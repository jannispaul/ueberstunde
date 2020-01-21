import React from "react"

class StaticPodigeePlayer extends React.Component {
  constructor(props) {
    super(props)
    this.playerSource =
      "https://cdn.podigee.com/podcast-player/javascripts/podigee-podcast-player.js"
  }
  jsonConfig() {
    return JSON.stringify({
      episode: {
        media: {
          mp3:
            // "https://cdn.podigee.com/media/podcast_4411_podigee_podcast_news_episode_11_zahlenzauber_bei_podigee.mp3?v=1565954088&source=web_download&dl=1",
            // "https://cdn.podigee.com/media/podcast_15431_the_testers_episode_1_new_episode.mp3?v=1571041732&source=user_backend",
            `${this.props.source}`,
        },
      },
      options: {
        theme: {
          html: "https://xn--berstunde-p9a.com/podigee/index.html",
          css: `https://xn--berstunde-p9a.coms/podigee/index.css`,
        },
      },
    })
  }

  loadPodigeePlayerScript() {
    // load podigee player scripts when the component was mounted
    const script = document.createElement("script")
    script.src = this.playerSource
    script.async = true
    document.body.appendChild(script)
  }

  componentDidMount() {
    this.loadPodigeePlayerScript()
  }

  render() {
    const configuration = this.props.configuration || this.jsonConfig()
    if (this.props.source) {
      return (
        <div>
          <div
            className="podigee-podcast-player"
            data-configuration={configuration}
            src={this.playerSource}
          ></div>
        </div>
      )
    } else {
      return ""
    }
  }
}

export default StaticPodigeePlayer
