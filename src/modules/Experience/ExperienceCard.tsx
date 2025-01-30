import React from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  dateRange: string;
  description: string;
  className?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  dateRange,
  description,
  className,
}) => {
  return (
    <div className={`rounded-lg p-8 ${className}`}>
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h4 className="text-2xl font-semibold text-primary-white">
              {title} at {company}
            </h4>
            <h6 className="text-base font-semibold text-zinc-300">
              {dateRange}
            </h6>
          </div>
          <p className="mt-3 text-zinc-300 text-base font-normal leading-relaxed text-left">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
