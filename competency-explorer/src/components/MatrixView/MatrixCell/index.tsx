import React from "react";
import { Category, Level, State } from "../../../models";
import { selectCompetenciesForLevelAndCategory } from "../../../selectors/competencies";
import { useSelector } from "react-redux";
import { bucketBySpecificLevel } from "../../../helpers/bucketer";
import { CompetencyBucket } from "../CompetencyBucket";
import "./styles.scss";
import { getLevelOpacity } from "../../../helpers/colors";

export type MatrixCellProps = {
  category: Category;
  level: Level;
};

export const MatrixCell: React.FC<MatrixCellProps> = ({ category, level }) => {
  const competencies = useSelector((s: State) =>
    selectCompetenciesForLevelAndCategory(s, level, category)
  );

  const buckets = bucketBySpecificLevel(competencies, level);

  return (
    <div className="matrixCompetencies">
      {buckets.map((b) => {
        if (!b) {
          return null;
        }
        const opacity = getLevelOpacity(b.originLevel);
        return (
          <CompetencyBucket
            {...b}
            key={`bucket-${category}-${level}-${b.originLevel}`}
            level={level}
            opacity={opacity}
          />
        );
      })}
    </div>
  );
};
