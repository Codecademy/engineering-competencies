import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { selectDisplayMode } from '../../selectors/filters';
import { MatrixLabel } from './MatrixLabel';
import { selectVisibleCategories, selectVisibleLevels } from '../../selectors/visibility';
import { MatrixCell } from './MatrixCell';
import './styles.scss';

export const MatrixView: React.FC = () => {
    const curDisplayMode = useSelector(selectDisplayMode);
    const categories = useSelector(selectVisibleCategories);
    const levels = useSelector(selectVisibleLevels);
     
    const children = [<span className='empty' />];
    for (let cat of categories) {
        children.push(<MatrixLabel key={`matrixlabel-${cat}`} label={cat} className='top' />)
    }

    for (let l of levels) {
        children.push(<MatrixLabel key={`matrixlabel-${l}`} label={l} className='left' />);
  
        for (let c of categories) {
            children.push(<MatrixCell key={`matrixcell-${l}-${c}`} category={c} level={l}/>);
        }
    }

    return (
        <div 
            className={cx(curDisplayMode === 'matrix' ? 'matrix' : 'hidden')}
            style={{
                gridTemplateColumns: `minmax(2rem, 10rem) repeat(${categories.length}, 1fr)`
            }}
        >
            {children.map((c) => c)}
        </div>
    )
}

/**
 * const clsSelector = selectDisplay().select((display) =>
    display === "matrix" ? "matrix" : "hidden"
  );

  const childSelector = selectCategoriesAndLevels().select((payload) => {
    let out: IChild[] = [{ cls: "blank" }];

    const { levels, categories } = payload;

    // add the categories
    for (let c of categories) {
      out.push({ cls: "category label", content: c });
    }

    // add the levels
    for (let l of levels) {
      out.push(renderLevelLabel(l));

      for (let c of categories) {
        out.push(renderCompetencies(l, c));
      }
    }
    return out;
  });

  const elem = createElement({
    cls: clsSelector,
    styles: {
     
    },
    children: childSelector,
  });
 */