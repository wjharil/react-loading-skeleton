import React, { Component } from 'react';
import './index.css';

export { default as SkeletonTheme } from './skeleton-theme';

export class SkeletonImg extends Component {
    static defaultProps = {
        img: null,
        wrapper: null,
        setClassSkeleton: " ",
        setClass: " ",
        heightSkeleton: '100px',
        height: " ",
        widthSkeleton: "100%",
        width: "",
        title: " ",
        alt: " "
    };

    render() {
        const Wrapper = this.props.wrapper;
        if(this.props.img){
            return (<img src={this.props.img} className={this.props.setClass} style={{width:this.props.width, height:this.props.height}} alt={this.props.alt} title={this.props.title} />)
        }else{
            return (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" className={this.props.setClassSkeleton  + " react-loading-skeleton"} style={{width:this.props.widthSkeleton, height:this.props.heightSkeleton}} />)
        }
    }
}

export class Skeleton extends Component {
    static defaultProps = {
        count: 1,
        wrapper: null,
        width: "100%"
    };

    render() {
        const elements = [];
        for (let i = 0; i < this.props.count; i++) {
            elements.push(
                <span key={i} className="react-loading-skeleton" style={{width:this.props.width}}>&zwnj;</span>
            );
        }

        const Wrapper = this.props.wrapper;
        return (
            <span>
                {Wrapper
                    ? elements.map((element, i) =>
                        <Wrapper key={i}>{element}&zwnj;</Wrapper>
                    )
                    : elements
                }
            </span>
        );
    }
}